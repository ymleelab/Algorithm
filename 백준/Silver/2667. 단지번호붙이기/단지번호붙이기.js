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
    return xPos >= 0 && yPos >= 0 && xPos < mapSize && yPos < mapSize
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

const mapSize = +input.shift()
const inputGraph = input.map((x) => x.split("").map((y) => +y));
const visited = Array.from(Array(mapSize + 1), () => Array(mapSize + 1).fill(0));
const answer = []
let visitedCount = 0

for(let row = 0; row < mapSize; row++) {
    for(let col = 0; col < mapSize; col++) {
        if(needVisit(row, col)) {
            DFS(row, col)
            answer.push(visitedCount)
            visitedCount = 0
        }
    }
}

answer.sort((a, b) => a - b)
console.log([answer.length, ...answer].join('\n'))
