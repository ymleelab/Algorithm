const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const xy = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const [N, M] = input
  .shift()
  .split(" ")
  .map((n) => Number(n));

const inputGraph = input.map((x) => x.split("").map((y) => +y));
BFS();

console.log(inputGraph[N - 1][M - 1]);

function BFS() {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, count] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const xPos = x + xy[i][0];
      const yPos = y + xy[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;

      if (inputGraph[yPos][xPos] === 1) {
        inputGraph[yPos][xPos] = count + 1;
        queue.push([xPos, yPos, count + 1]);
      }
    }
  }
}