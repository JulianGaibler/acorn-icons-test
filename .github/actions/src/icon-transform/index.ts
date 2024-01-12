import { optimize } from 'svgo'
import { SVG_LICENSE, commitChanges, getEnv, getInput, setupGit } from '../utils'
import fg from 'fast-glob'
import fs from 'fs'
import { summary } from '../summary'

async function run() {
  const filesGlob = getInput('files', true)
  const files = await fg(filesGlob)
  const changedFiles = []

  for (const file of files) {
    if (checkSvg(file)) {
      changedFiles.push(file)
    }
  }

  if (changedFiles.length === 0) {
    summary.addHeading(':smile_cat: No SVGs changed', 3)
    summary.addRaw(`Checked ${files.length} files and made no changes.`)
    summary.write()
    return
  }

  commitChanges(changedFiles, 'Update SVGs', 'main')
  
  summary.addHeading(`:smiley_cat: Updated ${changedFiles.length} SVGs`, 3)
  summary.addList(changedFiles)
}

function checkSvg(path: string): boolean {

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
  const afterWithLicense = `${SVG_LICENSE}\n${result.data.replace(/>/g, '>\n')}\n`

  const fileChanged = afterWithLicense !== originalFile

  if (fileChanged) {
    fs.writeFileSync(path, afterWithLicense)
  }
  return fileChanged
}

run()
