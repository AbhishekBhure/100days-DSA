arr1 = [1, 2, 3, 4, 5];
val = 4;
count = 0;
var reduceLength = false;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] != val) {
    arr1[count++] = arr1[i];
  } else {
    reduceLength = true;
  }
}

if (reduceLength) {
  arr1.length -= 1;
}

console.log(arr1);
