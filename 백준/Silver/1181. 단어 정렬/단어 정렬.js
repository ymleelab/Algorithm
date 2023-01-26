const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

console.log(solution());

function solution() {
  const set = new Set(input);
  const arr = [...set]
    .sort((x, y) => x.length - y.length || x.localeCompare(y))
    .join("\n");
  return arr;
}