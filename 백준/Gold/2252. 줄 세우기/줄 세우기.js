const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt"
const input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const graph = Array.from(Array(N + 1), () => [])
const inDegrees = Array(N + 1).fill(0)
const queue = []
const result = []

input.forEach(str => {
  const [prev, next] = str.split(' ').map(Number)
  graph[prev].push(next)
  inDegrees[next]++
})

for (let i = 1; i <= N; i++) {
  if (!inDegrees[i]) queue.push(i)
}

while (queue.length) {
  const n = queue.shift()
  result.push(n)
  graph[n].forEach((v) => {
    inDegrees[v]--
    if (!inDegrees[v]) queue.push(v)
  })
}

console.log(result.join(' '))