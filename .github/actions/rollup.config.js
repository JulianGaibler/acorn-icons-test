import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import json from '@rollup/plugin-json'

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: 'src/icon-transform/index.ts',
    output: {
      format: 'iife',
      name: 'background',
      file: 'dist/icon-transform/index.js',
      sourcemap: !production,
    },
    plugins: [
      commonjs(),
      json(),
      nodePolyfills(),
      resolve({
        browser: false,
        preferBuiltins: true,
      }),
      typescript(),
      copy({
        targets: [
          {
            src: ['src/icon-transform/**/*', '!src/icon-transform/**/*.ts'],
            dest: 'dist/icon-transform',
            filter: (src) => !src.endsWith('.ts'),
          },
        ],
      }),
    ],
    watch: {
      clearScreen: false,
    },
  },
]
