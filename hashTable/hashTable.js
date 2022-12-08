class HashTables {
  constructor(size) {
    this.keyMap = new Array(size);
  }
  hash(key, size) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % size;
  }
  get(key) {
    let index = this.hash(key, 13);
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
  set(key, value) {
    let index = this.hash(key, 13);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
}

