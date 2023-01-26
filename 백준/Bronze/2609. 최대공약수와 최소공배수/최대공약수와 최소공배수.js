const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution();

function solution() {
  const [a, b] = input.split(" ");
  const n = euclid(a, b);

  console.log(n);
  console.log((a * b) / n);
}

function euclid(a, b) {
  const n = a % b;
  if (n === 0) return b;
  return euclid(b, n);
}