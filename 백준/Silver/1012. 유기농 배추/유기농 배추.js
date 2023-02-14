const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const xy = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const range = (xPos, yPos) => {
    return xPos >= 0 && yPos >= 0 && xPos < M && yPos < N
}
const needVisit = (row, col) => {
    return inputGraph[row][col] === 1 && visited[row][col] === 0
}
const DFS = (row, col) => {
    if(range(row, col) && needVisit(row, col)) {
        visited[row][col] = 1
        visitedCount++
        for(let n = 0; n < xy.length; n++) {
            DFS(row + xy[n][0], col + xy[n][1])
        }
    }
}

const testCaseSize = +input.shift()
let answer = []
let inputGraph = []
let visited  = []
let [M, N, K] = []
let visitedCount = 0

for(let i = 0; i < testCaseSize; i++) {
    [M, N, K] = input.shift().split(' ').map(n => +n)
    inputGraph = Array.from(Array(M), () => Array(N).fill(0));
    visited = Array.from(Array(M), () => Array(N).fill(0));
    visitedCount = 0

    for(let node of input.slice(0, K)) {
        const [x, y] = node.split(' ').map(n => +n)
        inputGraph[x][y] = 1
    }

    for(let row = 0; row < M; row++) {
        for(let col = 0; col < N; col++) {            
            if(needVisit(row, col)) {
                DFS(row, col)
                answer.push(visitedCount)
                visitedCount = 0
            }
        }
    }
    console.log(answer.filter(n => n !== 0).length)
    answer = []
    input = input.slice(K)
}