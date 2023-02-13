#!/usr/bin/env node

const { program } = require('commander')
const fs = require('fs')

program.parse(process.argv)

const origin = program.args[0]
const destination = program.args[1]

if(!origin || !destination) return

fs.renameSync(origin, destination)