#!/usr/bin/node
const argv = process.argv.slice(2);
const n = parseInt(argv[0]);

const fact = factorial(n);
console.log(fact);

function factorial (x) {
  if ((!argv.some(argv => argv)) || x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
