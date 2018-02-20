class Sorter {
  constructor() {
    this.list = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.list.push(element);
  }

  at(index) {
    return this.list[index];
  }

  get length() {
    return this.list.length;
  }

  toArray() {
    return this.list;
  }

  //TODO: optimization
  sort(indices) {
    indices.sort((a,b) => a - b)
    let arr = [];
    indices.forEach(i => {
       arr.push(this.at(i)); 
    });
    arr.sort(this.comparator);
    for (let i = 0; i < arr.length; i++) {
      this.list[indices[i]] = arr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;