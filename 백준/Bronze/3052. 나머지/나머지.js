const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = [];

for (num of input) {
  const rest = num % 42;
  if (!arr.includes(rest)) {
    arr.push(rest);
  }
}
console.log(arr.length);