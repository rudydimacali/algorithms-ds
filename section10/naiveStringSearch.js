/*
The Naive String Search accepts a long string and a substring to search for,
and iterates through the long string while incrementing a counter every time
the substring is matched.
It then returns the total count of matches.

I: string, substring
O: count of substring appearances
C: N/A
E: N/A
Time: O(n^2) Space: O(1)
*/

const assert = require('assert');

const stringSearch = (string, substring) => {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === substring[0]) {
      for (let j = 1; j < substring.length; j += 1) {
        if (string[i + j] !== substring[j]) break;
        if (j + 1 === substring.length) count += 1;
      }
    }
  }
  return count;
};

assert.equal(stringSearch('asdasd', 'asd'), 2);
assert.equal(stringSearch('hellohihellobye', 'll'), 2);
assert.equal(stringSearch('hellohihellobye', 'test'), 0);
assert.equal(stringSearch('123123123', '123'), 3);
