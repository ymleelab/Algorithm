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

const mapSize = +input.shift()
const inputGraph = input.map((x) => x.split("").map((y) => +y));
const visited = Array.from(Array(mapSize + 1), () => Array(mapSize + 1).fill(0));
const complex = []
let number = 0

for(let row = 0; row < mapSize; row++) {
    for(let col = 0; col < mapSize; col++) {
        if(inputGraph[row][col] === 1 && visited[row][col] === 0) {
            DFS(row, col)
            complex.push(number)
            number = 0
        }
    }
}

complex.sort((a, b) => a - b)
const answer = [complex.length, ...complex]
console.log(answer.join('\n'))

function DFS(row, col) {
    if(range(row, col) && inputGraph[row][col] === 1 && visited[row][col] === 0) {
        visited[row][col] = 1
        number++
        for(let n = 0; n < xy.length; n++) {
            DFS(row + xy[n][0], col + xy[n][1])
        }
    }
}