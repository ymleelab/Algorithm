const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(v => +v);
let answer = -1

function solution(A, count) {
  if(A === B) {
    answer = count + 1
    return
  }
  if(A * 2 <= B) solution(A * 2, count + 1)
  if(A * 10 + 1 <= B) solution(A * 10 + 1, count + 1)
}

solution(A, 0)
console.log(answer)