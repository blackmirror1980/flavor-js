import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import fs from 'fs';

import pkg from './package.json';

const cacheFileName = ".uglifyjs-cache.json";
const uglifyOptions = {
    mangle: false,
    nameCache: JSON.parse(fs.readFileSync(cacheFileName, "utf8"))
};
export default [{
  // normal builds
  input: 'src/index.es.js',
  output: [{
    name: 'Flavor',
    file: pkg.main.replace(/\.min\.js/ig, '.js'),
    format: 'umd',
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    filesize(),
  ],
}, {
  // normal builds
  input: 'src/index.js',
  output: [{
    name: 'default',
    file: pkg.browser.replace(/\.min\.js/ig, '.js'),
    format: 'iife',
    extend: true,
  }, {
    name: 'Flavor',
    file: pkg.module.replace(/\.min\.js/ig, '.js'),
    format: 'cjs',
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    filesize(),
  ],
}, {
  // main minified build
  input: 'src/index.es.js',
  output: [{
    name: 'Flavor',
    file: pkg.main,
    format: 'umd',
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
}, {
  // browser minified build
  input: 'src/index.js',
  output: [{
    name: 'default',
    file: pkg.browser,
    format: 'iife',
    extend: true,
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
}, {
  // module minified build
  input: 'src/index.js',
  output: [{
    name: 'Flavor',
    file: pkg.module,
    format: 'cjs',
  }],
  plugins: [
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify(uglifyOptions)),
    filesize(),
  ],
}];
