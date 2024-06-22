#!/usr/bin/node
const argv = process.argv.slice(2);
const num = parseInt(argv[0]);

if (Number.isInteger(num)) {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}
