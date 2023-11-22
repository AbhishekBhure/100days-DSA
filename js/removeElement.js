function removeElement(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] === val) {
      arr[left] = arr[right];
      right--;
    } else {
      left++;
    }
  }
  return left;
}

console.log(removeElement([0, 1, 2, 3, 0, 4, 2, 2], 2));
