class Hashtable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculate(val) {
    let sum = 0;

    for (let i = 0; i < val.length; i++) {
      let charCode = val.charCodeAt(i);
      sum += charCode;
    }

    return sum % this.size;
  }

  add(key, val) {
    let hash = this.calculate(key);

    this.values[hash] = val;
  }

  getItem(key) {
    let hash = this.calculate(key);
    return this.values[hash];
  }
  print() {
    console.log(this.values);
  }
}

let hash = new Hashtable(51);
hash.add("Hello", "World");

console.log(hash.getItem("Hello"));
