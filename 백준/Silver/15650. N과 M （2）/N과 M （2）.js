const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ');
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
    answer.push(i + 1)

    DFS(d + 1, i)
    answer.pop()
    visited[i] = false
  }
}