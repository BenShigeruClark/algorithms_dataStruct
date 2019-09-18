// Create queue data structure
// queue should be a class with methods add and remove
// should store an element until it is removed

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

