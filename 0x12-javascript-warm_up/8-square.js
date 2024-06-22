#!/usr/bin/node
const argv = process.argv.slice(2);
const num = parseInt(argv[0]);

if (Number.isInteger(num)) {
  for (let i = 0; i < num; i++) {
    let output = '';
    for (let j = 0; j < num; j++) {
      output += 'X';
    }
    console.log(output);
  }
} else {
  console.log('Missing size');
}
