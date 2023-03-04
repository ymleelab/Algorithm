const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
function DFS(V) {
  visitedDFS[V] = true;
  graphDFS.push(V);

  for (let i = 1; i < inputGraph.length; i++) {
    if (inputGraph[V][i] === 1 && visitedDFS[i] === false) {
      DFS(i);
    }
  }
}

let inputGraph = [];
let graphDFS = [];
let visitedDFS;
let count = 0;

const [N, M] = input.shift().split(" ").map((n) => Number(n));
inputGraph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
visitedDFS = new Array(N + 1).fill(false);

for (let node of input) {
  const [x, y] = node.split(" ").map((n) => Number(n));
  inputGraph[x][y] = 1;
  inputGraph[y][x] = 1;
}
for(let i = 1; i <= N; i++) {
  if(!visitedDFS[i]) {
    DFS(i)
    count++
  }
}

console.log(count);