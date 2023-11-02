"use strict";

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (i < arr1.length - 1) {
//     if (arr1[i] !== arr1[i + 1]) {
//       removeDup.push(arr1[i]);
//     }
//   } else {
//     removeDup.push(arr1[i]);
//   }
// }

let res = arr1.filter((val, index, self) => {
  return self.indexOf(val) === index;
});

console.log(res);
console.log(removeDup);
