import { execSync } from 'child_process'
import {promises} from 'fs'

const {access, writeFile} = promises

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

export async function setupGit() {
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

  await writeFile(`${process.env.HOME}/.netrc`, netrcContent, { mode: 0o600 })

  // Configure Git user information
  execSync('git config --global user.email "actions@github.com"')
  execSync('git config --global user.name "GitHub Action"')
}

export async function commitChanges(
  files: string[],
  message: string,
) {
  await setupGit()

  const branch = getEnv('GITHUB_HEAD_REF')?.replace('refs/heads/', '')

  console.log(`Committing changes to ${branch}`)

  execSync(`git add ${files.join(' ')}`)
  execSync(`git commit -m "${message}"`)
  execSync(`git push origin ${branch}`)
}

