const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution());

function solution() {
  return input[1].split('').reduce((acc, curr) => Number(acc) + Number(curr))
}