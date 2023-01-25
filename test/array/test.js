const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
input.shift();

console.log(solution());

function solution() {
  const arr = [...new Set(input)]
    .sort((x, y) => x.length - y.length || x.localeCompare(y))
    .join("\n");
  return arr;
}