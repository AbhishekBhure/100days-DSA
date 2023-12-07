const hash = new Map();
let arr = [1, 2, 2, 7];
let newArr = [];
let target = 9;
let i = 0;
let foundPair = false;

while (i < arr.length) {
  hash.set(arr[i], i);
  i++;
}

i = 0;

while (i < arr.length && !foundPair) {
  let compliment = target - arr[i];

  if (hash.has(compliment)) {
    if (i !== hash.get(compliment)) {
      newArr.push(arr[i]);

      newArr.push(arr[hash.get(compliment)]);
      foundPair = true;
    }
  }
  i++;
}

console.log(newArr);

// let map1 = new Map();
// let arr = [1, 2, 2, 7];
// let i1 = 0;

// while (i1 < arr.length) {
//   map1.set(arr[i1], i1);
//   i1++;
// }

// console.log(map1.get(1));
