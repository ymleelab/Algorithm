const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [N, ...inputArr] = fs.readFileSync(filePath).toString().trim().split("\n");
N = +N
const xy = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
  
const inputGraph = inputArr.map((x) => x.split(""));
let visitedBFS = Array.from(Array(N), () => Array(N).fill(false))

const blindnessGraph = inputArr.map((x) => {
    const arr = x.split('')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'G') arr[i] = 'R'
    }
    return arr
  })
let blindnessVisitedBFS = Array.from(Array(N), () => Array(N).fill(false))

let count = 0
let blindnessCount = 0

function BFS(x, y, inputGraph, visitedBFS) {
    const queue = [[x, y]];
    visitedBFS[x][y] = true

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
        const xPos = x + xy[i][0];
        const yPos = y + xy[i][1];
        if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= N) continue;

        if (inputGraph[xPos][yPos] == inputGraph[x][y] && visitedBFS[xPos][yPos] === false) {
            visitedBFS[xPos][yPos] = true
            queue.push([xPos, yPos, inputGraph[xPos][yPos]]);
        }
        }
    }
}

for(let i = 0; i < inputArr.length; i++) {
    for(let j = 0; j < inputArr.length; j++) {
        if(!visitedBFS[i][j]) {
            BFS(i, j, inputGraph, visitedBFS)
            count++
        }
        if(!blindnessVisitedBFS[i][j]) {
            BFS(i, j, blindnessGraph, blindnessVisitedBFS)
            blindnessCount++
        } 
    }
}
console.log(count, blindnessCount)