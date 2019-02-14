const assert = require('assert');

/* Write a function that takes a number n and returns the nth number
in the Fibonacci sequence.

 I: Number
 O: N number in the Fibonacci sequence.
 C: N/A
 E: N/A
 */

const fib = (n) => {
  if (n === 1 || n === 2) return 1;
  const fibs = [1, 1];
  const addFib = () => {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    if (fibs.length < n) { addFib(); }
  };
  addFib();
  return fibs[n - 1];
};

assert.equal(fib(4), 3);
assert.equal(fib(10), 55);
assert.equal(fib(28), 317811);
assert.equal(fib(35), 9227465);

const fibPure = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

assert.equal(fibPure(4), 3);
assert.equal(fibPure(10), 55);
assert.equal(fibPure(28), 317811);
assert.equal(fibPure(35), 9227465);
