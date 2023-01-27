const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(solution());

function solution() {
  let count = 0;
  while (true) {
    if (input % 5 == 0) {
      count += input / 5;
      break;
    }
    if (input < 0) {
      count = -1;
      break;
    }
    input -= 3;
    count++;
  }
  return count;
}

/* 

https://www.acmicpc.net/problem/2839


*/
