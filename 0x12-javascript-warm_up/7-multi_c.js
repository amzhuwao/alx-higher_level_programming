#!/usr/bin/node
const argv = process.argv.slice(2);
const num = parseInt(argv[0]);

if (Number.isInteger(num)) {
  for (let i = 0; i < num; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurances');
}
