import {
  FormattableFile,
  ensureLicense,
  formatFile,
  getInput,
  svgoBasePlugins,
  svgoRemoveAttrs,
  tryCatch,
} from '../utils'
import fs from 'node:fs'
import fg from 'fast-glob'
import { summary } from '../summary'
import { optimize } from 'svgo'

tryCatch(run, 'Failed to check mobile files. See logs for details.')

async function run() {
  const filesGlob = getInput('files', true)
  const fileType = getInput('file_type', true) as FormattableFile
  const files = await fg(filesGlob)
  const changedFiles: string[] = []

  for (const file of files) {
    if (await checkSvg(file, fileType)) {
      changedFiles.push(file)
    }
  }

  if (changedFiles.length === 0) {
    summary.addHeading(`:iphone: No ${fileType.toUpperCase()} files changed`, 3)
    summary.addRaw(
      `Checked ${files.length} ${fileType.toUpperCase()} files and made no changes.`,
    )
    summary.write()
    return
  }

  summary.addHeading(
    `:iphone: Updated ${changedFiles.length} mobile ${fileType.toUpperCase()} files`,
    3,
  )
  summary.addList(changedFiles)
  summary.write()
}

async function checkSvg(path: string, type: FormattableFile): Promise<boolean> {
  if (!path.endsWith(`.${type}`)) {
    return false
  }
  const originalFile = fs.readFileSync(path, 'utf8')

  let formatted = originalFile

  if (type === 'svg') {
    formatted = optimize(originalFile, {
      plugins: [
        ...svgoBasePlugins,
        svgoRemoveAttrs([
          'id',
          'data-name',
          'class',
          'stroke',
          'stroke-width',
          'stroke-miterlimit',
        ]),
      ],
    }).data
  }

  formatted = await formatFile(type, originalFile)
  const withLicense = ensureLicense(formatted)

  const fileChanged = withLicense !== originalFile
  if (fileChanged) {
    fs.writeFileSync(path, withLicense)
  }
  return fileChanged
}
