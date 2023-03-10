const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ')
const [...arr] = input[1].split(' ').map(n => +n).sort((a, b) => a - b)

let visited = Array(+N + 1).fill(0)
let answer = []
DFS(0, 0)

function DFS(d, idx) {
  if(d == M) {
    console.log(...answer)
    return
  }

  for(let i = idx; i < N; i++) {
    if(visited[i]) continue
    visited[i] = true
    answer.push(arr[i])

    DFS(d + 1, idx)
    answer.pop()
    visited[i] = false
  }
}