import { optimize } from 'svgo'
import { getInput } from '../utils'
import fg from 'fast-glob'

async function run() {
  const filesGlob = getInput('files', { required: true })
  const files = await fg(filesGlob)

  console.log('files:', files)

  const result = optimize('<svg></svg>', {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  })

  console.log(result.data)
}

run()
