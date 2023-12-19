class Hashtabble {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(val) {
    return val % this.size;
  }

  add(val) {
    let hash = this.calculateHash(val);

    if (this.values[hash] === undefined) {
      this.values[hash] = val;
    } else {
      let iters = 0;
      while (this.values[hash] !== undefined && iters <= this.size) {
        hash++;
        hash %= this.size;
        iters++;
      }

      if (iters > this.size) {
        throw "StackOverflow";
      } else {
        this.values[hash] = val;
      }
    }
  }

  contains(val) {
    let hash = this.calculateHash(val);

    if (this.values[hash] == val) {
      return true;
    } else {
      let iters = 0;
      while (this.values[hash] != val && iters <= this.size) {
        hash++;
        hash %= this.size;
        iters++;
      }
      if (this.values[hash] === val) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    console.log(this.values);
  }
}

module.exports = Hashtabble;

// let hash = new Hashtabble(5);
// hash.add(1);
// hash.add(2);
// hash.add(4);
// hash.add(8);
// hash.add(12);
// hash.print();
