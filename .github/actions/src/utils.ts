import { execSync } from 'child_process'
import fs from 'fs'

export const SVG_LICENSE = `<!-- This Source Code Form is subject to the terms of the Mozilla Public
- License, v. 2.0. If a copy of the MPL was not distributed with this
- file, You can obtain one at http://mozilla.org/MPL/2.0/. -->`

export function getInput(name: string, required = true): string {
  const val: string =
    process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || ''
  if (required && !val) {
    throw new Error(`Input required and not supplied: ${name}`)
  }

  return val.trim()
}

export function getEnv(name: string): string {
  return process.env[name] || ''
}

export function setupGit() {
  if (!process.env.GITHUB_ACTOR) {
    return
  }

  // Create or overwrite the .netrc file
  const netrcContent = `
    machine github.com
    login ${process.env.GITHUB_ACTOR}
    password ${process.env.INPUT_GITHUB_TOKEN}
    machine api.github.com
    login ${process.env.GITHUB_ACTOR}
    password ${process.env.INPUT_GITHUB_TOKEN}
  `

  fs.writeFileSync(`${process.env.HOME}/.netrc`, netrcContent, { mode: 0o600 })

  // Configure Git user information
  execSync('git config --global user.email "actions@github.com"')
  execSync('git config --global user.name "GitHub Action"')
}

export function commitChanges(
  files: string[],
  message: string,
  branch: string
): void {
  // make execSync calls to git
  // git add files
  execSync(`git add ${files.join(' ')}`)
  // git commit -m message
  execSync(`git commit -m "${message}"`)
  // git push origin branch
  execSync(`git push origin ${branch}`)
}