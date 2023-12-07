const Hashtabble = require("./hashTable");

const hash = new Hashtabble(251);
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 0, 7, 9, 8, 11, 12];
let intercept = [];

for (let i = 0; i < arr1.length; i++) {
  let v = arr1[i];
  if (!hash.contains(v)) {
    hash.add(v);
  }
}

for (let i = 0; i < arr2.length; i++) {
  let v = arr2[i];
  if (hash.contains(v)) {
    intercept.push(v);
  }
}

console.log(intercept);
