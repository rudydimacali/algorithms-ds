const assert = require('assert');

/* Write a function that takes a base and exponent.
The function should return the power of the base to the exponent.

 I: Base, exponent
 O: base ^ exponent
 C: N/A
 E: N/A
 */

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

assert.equal(power(4, 2), 16);
assert.equal(power(2, 0), 1);
assert.equal(power(2, 2), 4);
assert.equal(power(2, 4), 16);
