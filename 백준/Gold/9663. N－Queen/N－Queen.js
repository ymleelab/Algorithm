const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const N = Number(fs.readFileSync(filePath))
const visited = new Array(N).fill(0)
let answer = 0

dfs(0)
console.log(answer)

function dfs(x) {
  if(x === N) {
    answer += 1
    return
  }
  for(let i = 0; i < N; i++) {
    if(visited[x]) continue
    visited[x] = i
    if(check(x)) dfs(x + 1)
    visited[x] = 0
  }
}

function check(x) {
  for(let i = 0; i < x; i++) {
    if(visited[x] === visited[i]) return false
    if(Math.abs(visited[x] - visited[i]) === x - i) return false
  }
  return true
}