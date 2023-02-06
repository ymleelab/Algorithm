const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(solution());

function solution() {
  return input.split(" ").filter((x) => x !== "").length;
}