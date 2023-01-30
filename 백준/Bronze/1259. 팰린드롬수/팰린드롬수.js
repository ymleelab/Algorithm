const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

solution();

function solution() {
  for (num of input) {
    let arr = [];
    let result = "yes";
    const half = Math.floor(num.length / 2);
    const odd = num.length % 2 == 1;

    for (let i = 0; i < num.length; i++) {
      if (half > i) arr.push(num[i]);
      else if (odd && half == i) continue;
      else if (num[i] != arr.pop()) result = "no";
    }
    console.log(result);
  }
}