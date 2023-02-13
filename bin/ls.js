#!/usr/bin/env node

const { readdirSync, lstatSync } = require('fs')
const { resolve, join } = require('path')
require('colors')

var folders = ''
var files = ''

readdirSync(resolve()).forEach((item) => { lstatSync(join(resolve(), item)).isDirectory() ? folders += `${item}\n`.yellow : files += `${item}\n`.blue })

console.log(`${folders}${files}`)