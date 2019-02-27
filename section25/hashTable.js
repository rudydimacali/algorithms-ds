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


class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i += 1) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i += 1) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}
