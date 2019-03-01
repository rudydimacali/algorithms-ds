/* eslint-disable no-param-reassign */

/*

Recursive Time Complexity:
O(1.6^n)

*/
const fibonacciRecursive = (n) => {
  if (n <= 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

/*

Dynamic Programming Time Complexity:
O(n)

*/
const fibonacciDynamic = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const num = fibonacciDynamic(n - 1, memo) + fibonacciDynamic(n - 2, memo);
  memo[n] = num;
  return num;
};
