function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let res = fibonacci(n - 1) + fibonacci(n - 2);
  return res;
}

// console.log(fibonacci(10));

let fib_dpp = [-1, 0, 1];
function fib_dp(n) {
  if (n <= 2) {
    return fib_dpp[n];
  }

  for (let i = 3; i < n; i++) {
    fib_dpp[i] = fib_dpp[i - 1] + fib_dpp[i - 2];
  }
  return fib_dpp[n];
}

console.log(fib_dp(100));
