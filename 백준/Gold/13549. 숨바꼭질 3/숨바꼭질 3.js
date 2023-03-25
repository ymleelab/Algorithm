const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)
const visited = Array.from({ length: 100100 }, () => 0)

console.log(BFS())

function BFS() {
  const queue = []
  queue.push([N, 0])
  visited[N] = 1

  while (queue.length) {
    const [curr, time] = queue.shift()
    if (curr === K) return time
    for (next of [curr * 2, curr - 1, curr + 1]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = 1
        if (next == curr * 2) {
          queue.unshift([next, time])
        } else {
          queue.push([next, time + 1])
        }
      }
    }
  }
}