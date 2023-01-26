const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let arr = Array.from(Array(100), () => Array(100).fill(0));
const rectangleSize = 10;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const count = parseInt(input[0]);
  let result = 0;

  for (let i = 1; i <= count; i++) {
    const [x, y] = input[i].split(" ").map((item) => parseInt(item));

    for (j = x; j < x + rectangleSize; j++) {
      for (k = y; k < y + rectangleSize; k++) {
        if (++arr[j][k] == 1) result++;
      }
    }
  }
  console.log(result);
});