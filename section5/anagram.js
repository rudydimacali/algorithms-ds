const assert = require('assert');

/* Given two strings, write a function to determine if the second string is an anagram of the first.
 An anagram is a word, phrase, or name formed by rearranging the letters of another.
 For example: cinema, formed from iceman.
 Assume each string is only lowercase chars.

 I: two strings
 O: boolean
 C: O(N) Time Complexity
 E: N/A
 */

const validAnagram = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  const strOneChars = {};
  const strTwoChars = {};
  for (let i = 0; i < strOne.length; i++) {
    strOneChars[strOne[i]] = (strOneChars[strOne[i]] || 0) + 1;
    strTwoChars[strTwo[i]] = (strTwoChars[strTwo[i]] || 0) + 1;
  }
  const keys = Object.keys(strOneChars);
  for (let j = 0; j < keys.length; j++) {
    if (strOneChars[keys[j]] !== strTwoChars[keys[j]]) {
      return false;
    }
  }
  return true;
};

assert.equal(validAnagram('asdasd', 'dasdas'), true);
assert.equal(validAnagram('aaz', 'zza'), false);
assert.equal(validAnagram('', ''), true);
assert.equal(validAnagram('a', 'aa'), false);
assert.equal(validAnagram('asdaad', 'bbaswq'), false);
assert.equal(validAnagram('iceman', 'cinema'), true);


const validAnagramTwo = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  const chars = {};
  for (let i = 0; i < strOne.length; i++) {
    chars[strOne[i]] = chars[strOne[i]] ? chars[strOne[i]] + 1 : 1;
  }
  for (let j = 0; j < strTwo.length; j++) {
    if (!chars[strTwo[j]] || chars[strTwo[j]] === 0) return false;
    chars[strTwo[j]] -= 1;
  }
  return true;
};

assert.equal(validAnagramTwo('asdasd', 'dasdas'), true);
assert.equal(validAnagramTwo('aaz', 'zza'), false);
assert.equal(validAnagramTwo('', ''), true);
assert.equal(validAnagramTwo('a', 'aa'), false);
assert.equal(validAnagramTwo('asdaad', 'bbaswq'), false);
assert.equal(validAnagramTwo('iceman', 'cinema'), true);