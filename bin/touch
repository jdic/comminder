#!/usr/bin/env node

const { program } = require('commander')
const { join, resolve } = require('path')
const { existsSync, writeFileSync } = require('fs')

program.parse(process.argv)

program.args.forEach((file) => { if(!existsSync(join(resolve(), file))) writeFileSync(join(resolve(), file), '') })