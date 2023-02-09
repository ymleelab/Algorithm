const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n"); 

let inputGraph = [];
let graphDFS = [];
let visitedDFS;
let graphBFS = [];
let visitedBFS;

solution();

function solution() {
  const [N, M, V] = input[0].split(" ").map((n) => Number(n));
  input.shift();
  inputGraph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  visitedDFS = new Array(N + 1).fill(false);
  visitedBFS = new Array(N + 1).fill(false);

  for (let node of input) {
    const [x, y] = node.split(" ").map((n) => Number(n));
    inputGraph[x][y] = 1;
    inputGraph[y][x] = 1;
  }

  DFS(V);
  console.log(graphDFS.join(" "));
  BFS(V);
  console.log(graphBFS.join(" "));
}

function DFS(V) {
  visitedDFS[V] = true;
  graphDFS.push(V);

  for (let i = 1; i < inputGraph.length; i++) {
    if (inputGraph[V][i] === 1 && visitedDFS[i] === false) {
      DFS(i);
    }
  }
}

function BFS(V) {
  let queue = [];
  queue.push(V);
  graphBFS.push(V);

  while (queue.length !== 0) {
    let dequeue = queue.shift();
    visitedBFS[dequeue] = true;
    for (let i = 1; i < inputGraph.length; i++) {
      if (inputGraph[dequeue][i] === 1 && visitedBFS[i] === false) {
        visitedBFS[i] = true;
        queue.push(i);
        graphBFS.push(i);
      }
    }
  }
}