const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim();

solution();

function solution() {
  for(let i = 1; i <= 9; i++) {
    console.log(`${input} * ${i} = ${input*i}`)
  }
}