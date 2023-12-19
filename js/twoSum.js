// O(n);
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

//Brute force approach
// O(n^2)
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

//two pointers this is best when the arr is sorted
// function twoSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum > target) {
//       right--;
//     } else if (sum < target) {
//       left++;
//     } else {
//       return [left, right];
//     }
//   }
//   return [-1, -1];

//   console.log("left", left);
//   console.log("right", right);
// }

//O(n) using obj/map
function twoSum(nums, target) {
  let bValues = {};

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    let b = target - a;

    if (bValues[a] === undefined) {
      bValues[b] = i;
    } else {
      return [bValues[a], i];
    }
  }
}

console.log(twoSum([1, 2, 3, 8, 9, 20], 12));
// console.log(twoSum([3, 2, 3], 6));
