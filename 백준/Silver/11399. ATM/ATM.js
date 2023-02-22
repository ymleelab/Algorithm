const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ").map((n) => +n);
let answer = 0;

arr
  .sort((a, b) => a - b)
  .reduce((acc, curr) => {
    answer += acc + curr;
    return acc + curr;
  }, 0);

console.log(answer);