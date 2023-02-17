const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [N, ...inputArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

class MaxHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) < this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  bubbleDown() {
    let index = 0;
    while (
      (this.leftChild(index) !== undefined &&
        this.leftChild(index) > this.items[index]) ||
      this.rightChild(index) > this.items[index]
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return item;
  }
}

const answer = [];
const maxheap = new MaxHeap();
inputArr.map((x) => {
  if (x === 0) {
    if (maxheap.size() <= 0) answer.push(0);
    else answer.push(maxheap.poll());
  } else {
    maxheap.add(x);
  }
});

console.log(answer.join("\n"));