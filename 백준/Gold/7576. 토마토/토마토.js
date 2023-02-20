const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input[0].split(" ").map((n) => +n);
const visited = Array.from(Array(N)).map((v) => Array(M).fill(0));
const xy = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let queue = [];
let count = M * N;
let answer;

for (let i = 1; i < input.length; i++) {
  let arr = input[i].split(" ").map(Number);
  arr.forEach((tomato, pos) => {
    if (tomato === 1) {
      queue.push([i - 1, pos, 0]);
      visited[i - 1][pos] = 1;
      count--;
    } else if (tomato === -1) {
      visited[i - 1][pos] = 1;
      count--;
    }
  });
}

let idx = 0;
while (queue.length != idx) {
  const [x, y, pos] = queue[idx];
  for (let i = 0; i < 4; i++) {
    const xPos = x + xy[i][0];
    const yPos = y + xy[i][1];

    if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= M) continue;
    if (!visited[xPos][yPos]) {
      visited[xPos][yPos] = 1;
      queue.push([xPos, yPos, pos + 1]);
      count--;
    }
  }
  idx++;
  answer = pos;
}

console.log(count ? -1 : answer);