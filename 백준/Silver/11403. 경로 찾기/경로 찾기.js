const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [T, ...inputArr] = fs.readFileSync(filePath).toString().trim().split("\n");

function DFS(start, node) {
    for (let i = 0; i < T; i++) {
        if (inputGraph[node][i] && !visitedDFS[start][i]) {
            visitedDFS[start][i] = true
            graphDFS[start][i] = 1
            // console.log(visitedDFS, graphDFS)
            DFS(start, i);
        }
    }
}
const inputGraph = inputArr.map(v => v.split(' ').map(n => +n))
const visitedDFS = Array.from(Array(+T), () => Array(+T).fill(false))
const graphDFS = Array.from(Array(+T), () => Array(+T).fill(0))

for(let i = 0; i < T; i++) {
    DFS(i, i)
}

console.log(graphDFS.map(v => v.join(' ')).join('\n'))