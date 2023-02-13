#!/usr/bin/env node

const { program } = require('commander')
const { join, resolve } = require('path')
const { existsSync, unlinkSync, lstatSync, rmdirSync } = require('fs')

program.parse(process.argv)

program.args.forEach((item) =>
{
  if(existsSync(join(resolve(), item)))
  {
    if(lstatSync(join(resolve(), item)).isDirectory()) rmdirSync(join(resolve(), item))
    else unlinkSync(join(resolve(), item))
  }
})