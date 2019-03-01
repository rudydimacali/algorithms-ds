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
O(n) -> CAN EXCEED MAXIMUM CALL STACK

*/
const fibonacciDynamic = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const num = fibonacciDynamic(n - 1, memo) + fibonacciDynamic(n - 2, memo);
  memo[n] = num;
  return num;
};

/*

Tabulated Programming Time Complexity:
O(n) -> WON'T EXCEED MAXIMUM CALL STACK

*/

const fibonacciTabulated = (n) => {
  if (n <= 2) return 1;
  const fibNums = [1, 1];
  for (let i = 2; i < n; i += 1) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n - 1];
};
