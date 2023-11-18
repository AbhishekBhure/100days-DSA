// function posNegNums(arr) {
//   let pos = [];
//   let neg = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       pos.push(arr[i]);
//     } else {
//       neg.push(arr[i]);
//     }
//   }
//   let res = [...neg, ...pos];
//   return res;
// }

// console.log(posNegNums([2, -2, 8, -9, 4, -5, 6]));

//using two pointers
function posNegNums(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] > 0) left++;
    else if (arr[right] < 0) right--;
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}
console.log(posNegNums([2, -2, 8, -9, 4, -5, 6]));
