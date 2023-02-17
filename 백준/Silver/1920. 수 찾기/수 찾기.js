const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, A, M, B] = input.map((v) => v.split(" ").map((n) => +n));
A.sort((a, b) => a - b);

const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2);
  if (right < left) {
    return list[mid] === target ? 1 : 0;
  }
  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
  return binarySearch(list, target, left, right, mid);
};

const answer = B.map((v) => binarySearch(A, v, 0, A.length - 1, 0));
console.log(answer.join("\n"));