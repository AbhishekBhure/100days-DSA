let map = new Map();
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 4];

for (let i = 0; i < arr1.length; i++) {
  if (!map.has(arr1[i])) {
    map.set(arr1[i], arr1[i]);
  }
}

let isSubset = true;
let i = 0;

while (i < arr2.length && isSubset) {
  if (!map.has(arr2[i])) {
    isSubset = false;
  }
  i++;
}

console.log(isSubset);
