function zigzag(a) {
  //   sort the aay first
  //   a.sort((a, b) => a - b);

  //   swaping adjecent to get zig zag pattern
  //   for (let i = 1; i < a.length - 1; i += 2) {
  //     const temp = a[i];
  //     a[i] = a[i + 1];
  //     a[i + 1] = temp;
  //     [a[i], a[i + 1]] = [a[i + 1], a[i]];
  //   }

  a.sort((a, b) => a - b);
  let n = a.length;
  let mid = Math.floor((n - 1) / 2);

  // Swap elements from mid to n-2 with elements from n-1 to mid+1
  for (let i = mid; i < n - 1; i++) {
    [a[i], a[n - 1]] = [a[n - 1], a[i]];
    n--;
  }

  return a;
}

console.log(zigzag([2, 3, 5, 1, 4]));
