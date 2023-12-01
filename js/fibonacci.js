function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let arr = [];
  let prev = 0,
    curr = 1,
    next;
  arr.push(prev);
  arr.push(curr);
  for (let i = 2; i < n; i++) {
    next = prev + curr;
    arr.push(next);
    prev = curr;
    curr = next;
  }
  return arr;
}

console.log(fibonacci(1));
