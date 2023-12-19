function bestTimeToSell(nums) {
  if (nums.length === 0) return 0;

  let min = nums[0];
  let max = 0;

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] - min);
    min = Math.min(min, nums[i]);
  }

  return max;
}

console.log(bestTimeToSell([7, 6, 4, 3, 1]));
