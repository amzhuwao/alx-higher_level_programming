#!/usr/bin/node
const { argv } = require('node:process');
console.log(argv.length);

if (argv.length === 0) {
  console.log('No arguments');
} else if (argv.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
