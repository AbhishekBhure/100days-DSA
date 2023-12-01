function missingNum(nums) {
  let res = nums.reduce((prev, curr) => prev + curr);
  console.log(`Sum: ${res}`);
  let b = (nums.length * (nums.length + 1)) / 2;
  return b - res;
}

console.log(missingNum([1, 0, 3, 2, 5, 7, 4, 6, 9]));
