const Hashtabble = require("./hashTable");

const hash = new Hashtabble(251);
let arr = [1, 1, 2, 3, 2, 3, 2, 4, 5, 1];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let v = arr[i];

  if (!hash.contains(v)) {
    hash.add(v);
    newArr.push(v);
  }
}
console.log(newArr);

// function removeDuplicate(arr) {
//   let map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], arr[i]);
//     }
//   }
//   return map;
// }

// console.log(removeDuplicate([1, 1, 2, 3, 2, 3, 2, 4, 5, 1]));
