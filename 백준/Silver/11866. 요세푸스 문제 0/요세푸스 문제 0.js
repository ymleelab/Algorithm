const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(solution());

function solution() {
  const [N, K] = input.split(" ");

  let arr = [];
  let num = 1;
  let count = 0;

  while (true) {
    if (!arr.includes(num++)) count++;
    if (count == K) {
      arr.push(num - 1);
      count = 0;
    }
    if (num > N) num -= N;
    if (arr.length == N) break;
  }
  return `<${arr.join(", ")}>`;
}