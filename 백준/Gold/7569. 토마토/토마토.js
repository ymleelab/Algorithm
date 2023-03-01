const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, H] = input.shift().split(" ").map((n) => +n);
const visited = Array.from(Array(H)).map(h => Array.from(Array(N)).map((v) => Array(M).fill(0)));
const xy = [
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
  [0, 0, 1],
  [0, 0, -1]
];
let queue = [];
let count = M * N * H;
let z = 0;
let answer;

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ").map(Number);
  arr.forEach((tomato, pos) => {
    if (tomato === 1) {
      queue.push([i % N, pos, z, 0]);
      visited[z][i % N][pos] = 1;
      count--;
    } else if (tomato === -1) {
      visited[z][i % N][pos] = 1;
      count--;
    }
  });
  if((i + 1) % N === 0) ++z
}

let idx = 0;
while (queue.length != idx) {
  const [x, y, z, pos] = queue[idx];
  for (let i = 0; i < xy.length; i++) {
    const xPos = x + xy[i][0];
    const yPos = y + xy[i][1];
    const zPos = z + xy[i][2];

    if (xPos < 0 || yPos < 0 || zPos < 0 || xPos >= N || yPos >= M || zPos >= H) continue;
    if (!visited[zPos][xPos][yPos]) {
      visited[zPos][xPos][yPos] = 1;
      queue.push([xPos, yPos, zPos, pos + 1]);
      count--;
    }
  }
  idx++;
  answer = pos;
}

console.log(count ? -1 : answer);