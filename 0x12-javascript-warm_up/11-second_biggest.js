#!/usr/bin/node

const nums = process.argv.slice(2);

if (nums.length === 0) {
  console.log(0);
} else if (nums.length === 1) {
  console.log(0);
} else {
  //const intnums = nums.map(nums => parseInt(nums));
  nums.sort();
  console.log(nums[1]);
}
