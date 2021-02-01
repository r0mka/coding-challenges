// Fib(n) = Fib(n - 1) + Fib(n - 2)
// Fib(2) = 1
// Fib(1) = 1
// 1 1 2 3 5

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoFib(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
}

// MY SOLUTION
// const cache = {};
// function memoFib(n) {
//   if (cache[n]) return cache[n];
//   if (n <= 2) return 1;
//   cache[n] = memoFib(n - 1) + memoFib(n - 2);
//   return cache[n];
// }

// console.log(fib(45));
console.log(memoFib(5));
