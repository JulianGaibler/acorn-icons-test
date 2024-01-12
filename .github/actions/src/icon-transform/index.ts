import { optimize } from 'svgo'
import { SVG_LICENSE, getEnv, getInput, setupGit } from '../utils'
import fg from 'fast-glob'
import fs from 'fs'
import { simpleGit } from 'simple-git'
import chalk from 'chalk'

async function run() {
  const filesGlob = getInput('files', true)
  const files = await fg(filesGlob)
  const changedFiles = []

  let changed = false
  for (const file of files) {
    if (checkSvg(file)) {
      console.log(chalk.green(`Updated ${file}`))
      changedFiles.push(file)
      changed = true
    }
  }

  if (!changed) {
    console.log(chalk.yellow('No files changed'))
    return
  }

  console.log(chalk.green('Pushing changes to GitHub'))

  const x = simpleGit()
    .add(filesGlob)
    .commit('Update SVGs', changedFiles)
    .push('origin', 'master')

    console.log('GIT: ', x)
  
  console.log(chalk.green('Done!'))
}

// return true if the file was changed
function checkSvg(path: string): boolean {
  // first, check if the file is an svg
  // if not, return false
  if (!path.endsWith('.svg')) {
    return false
  }
  // now we load the file
  const originalFile = fs.readFileSync(path, 'utf8')

  const result = optimize(originalFile, {
    plugins: [
      'removeDesc',
      'removeStyleElement',
      'removeOffCanvasPaths',
      'removeNonInheritableGroupAttrs',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'removeAttrs',
        params: {
          attrs:
            '(id|data-name|class|fill|stroke|stroke-width|stroke-miterlimit|clip-rule|fill-rule)',
        },
      },
      {
        name: 'viewBoxAndDimensions',
        fn: () => ({
          element: {
            exit(node) {
              if (node.name !== 'svg') {
                return
              }
              const viewBox = node.attributes.viewBox
              const width = node.attributes.width
              const height = node.attributes.height

              // return if all are present
              if (viewBox && width && height) {
                return
              }

              if ((viewBox && !width) || !height) {
                const [, , w, h] = viewBox.split(' ')
                node.attributes.width = w
                node.attributes.height = h
              } else if (width && height && !viewBox) {
                node.attributes.viewBox = `0 0 ${width} ${height}`
              } else {
                throw new Error('SVG has no width, height, or viewBox')
              }
            },
          },
        }),
      },
      {
        name: 'addContextFill',
        fn: () => ({
          element: {
            exit(node) {
              if (node.name !== 'svg') {
                return
              }
              node.attributes.fill = 'context-fill'
              node.attributes['fill-opacity'] = 'context-fill-opacity'
            },
          },
        }),
      },
      {
        name: 'addContextFill',
        fn: () => ({
          element: {
            exit(node) {
              if (node.name !== 'svg') {
                return
              }
              node.attributes.fill = 'context-fill'
              node.attributes['fill-opacity'] = 'context-fill-opacity'
            },
          },
        }),
      },
    ],
  })

  // add line break after each >
  const afterWithLicense = `${SVG_LICENSE}\n${result.data.replace(/>/g, '>\n')}`

  const fileChanged = afterWithLicense !== originalFile

  if (fileChanged) {
    fs.writeFileSync(path, afterWithLicense)
  }
  return fileChanged
}

run()
