const simpleHash = (keyStr, length) => {
  let total = 0;
  for (let i = 0; i < keyStr.length; i += 1) {
    total += (keyStr.charCodeAt(i) - 96) % length;
  }
  return total;
};

const betterHash = (keyStr, length) => {
  let total = 0;
  const PRIME = 31;
  for (let i = 0; i < Math.min(keyStr.length, 100); i += 1) {
    total = (total * PRIME + keyStr.charCodeAt(i) - 96) % length;
  }
  return total;
};
