import { EOL } from 'os'
import { summary } from './summary'
import prettier from 'prettier'
import prettierXmlPlugin from '@prettier/plugin-xml'
import { Config, PluginConfig } from 'svgo'

// Mozilla Public License 2.0 header
export const XML_LICENSE = `<!-- This Source Code Form is subject to the terms of the Mozilla Public${EOL}   - License, v. 2.0. If a copy of the MPL was not distributed with this${EOL}   - file, You can obtain one at http://mozilla.org/MPL/2.0/. -->`

/**
 * Retrieves an input from the environment
 *
 * @param name input name
 * @param required whether the input is required
 * @returns the input value
 */
export function getInput(name: string, required = true): string {
  const val: string = getEnv(`INPUT_${name.replace(/ /g, '_').toUpperCase()}`)
  if (required && !val) {
    throw new Error(`Input required and not supplied: ${name}`)
  }

  return val.trim()
}

/**
 *
 *
 * @param name
 * @returns
 */
export function getEnv(name: string): string {
  return process.env[name] || ''
}

export function ensureLicense(input: string): string {
  // remove all occurrences of the license in the input and any whitespace until the next line character
  const regex = new RegExp(
    '<!-- This Source Code Form is[\\s\\S]*?http://mozilla.org/MPL/2.0/. -->\\s*',
    'g',
  )
  const output = input.replace(regex, '')
  // add the license to the top of the file
  return `${XML_LICENSE}${EOL}${output}`
}

export async function tryCatch(fn: Function, errorSummary: string) {
  try {
    return await fn()
  } catch (error) {
    console.error(error)
    summary.addAlert('caution', errorSummary)
    summary.write()
    process.exit(1)
  }
}

export type FormattableFile = 'svg' | 'xml'

export async function formatFile(type: FormattableFile, content: string) {
  if (!['svg', 'xml'].includes(type)) {
    throw new Error(`Invalid type to format: ${type}`)
  }

  const plugins = type === 'svg' ? [] : [prettierXmlPlugin]

  const formatted = await prettier.format(content, {
    parser: type === 'svg' ? 'html' : 'xml',
    plugins,
    // use 4 spaces for indentation
    tabWidth: 4,
    printWidth: type === 'svg' ? 100000 : 80,
    singleAttributePerLine: false,
  })

  return formatted
}

export const svgoBasePlugins: Exclude<Config['plugins'], undefined> = [
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
]

export function svgoRemoveAttrs(attrs: string[]): PluginConfig {
  const attrString = attrs.map((attr) => attr.trim()).join('|')
  return {
    name: 'removeAttrs',
    params: {
      attrs: `(${attrString})`,
    },
  }
}
