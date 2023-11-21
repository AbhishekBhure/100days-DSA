// var twoSum = function (nums, target) {
//   const obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     const res = target - nums[i];
//     if (Object.keys(obj).includes(String(nums[i]))) {
//       return [i, obj[nums[i]]];
//     } else {
//       obj[res] = i;
//     }
//   }
// };

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([3, 2, 3], 6));
