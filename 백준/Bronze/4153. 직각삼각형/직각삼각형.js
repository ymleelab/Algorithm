const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution();

function solution() {
  input.pop();
  let result = [];
  for (data of input) {
    const [max, x, y] = data.split(" ").sort((a, b) => Number(b) - Number(a));

    result.push(
      Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(max, 2) ? "right" : "wrong"
    );
  }
  console.log(result.join("\n"));
}