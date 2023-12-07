let map = new Map();

let unioin = [];
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [1, 2, 4, 6, 8, 10];

for (let i = 0; i < arr1.length; i++) {
  if (!map.has(arr1[i])) {
    map.set(arr1[i], arr1[i]);
    unioin.push(arr1[i]);
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (!map.has(arr2[i])) {
    map.set(arr2[i], arr2[i]);
    unioin.push(arr2[i]);
  }
}

let res = map;

console.log(res);
