import { promises } from 'fs'
import { simpleGit } from 'simple-git'
import { getInput, tryCatch } from '../utils'
import { summary } from '../summary'
import { execSync } from 'child_process'

const { writeFile } = promises

tryCatch(run, 'Failed to commit changes. See logs for details.')

async function run() {
  const message = getInput('message', true)
  // add all changed status.files to staging
  const status = await simpleGit().status()
  // return if there are no changed files
  if (status.files.length === 0) {
    summary.addHeading(':smile_cat: Did not commit any files', 3)
    summary.addRaw(`Did not commit because there were no changed files.`)
    summary.write()
    return
  }
  // add all changed files to staging
  await simpleGit().add(status.files.map((file) => file.path))
  // add credentials if available
  await setupGit()
  // commit and push
  await simpleGit().commit(message).push('origin')

  summary.addHeading(`:smiley_cat: Committed ${status.files.length} files`, 3)
  summary.addList(status.files.map((file) => file.path))
  summary.write()
}

async function setupGit() {
  if (!process.env.GITHUB_ACTOR) return
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
  execSync('git config --global user.email "actions@github.com"')
  execSync('git config --global user.name "GitHub Action"')
}
