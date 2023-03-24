const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [N, M, ...info] = fs.readFileSync(filePath).toString().trim().split('\n')
N = +N
const [start, end] = info.pop().split(' ').map(Number)

let schedule = Array.from(Array(N + 1), () => [])
for (const i in info) {
  const [cityA, cityB, cost] = info[i].split(' ').map(Number)
  schedule[cityA].push([cityB, cost])
}
const costArr = new Array(N + 1).fill(Infinity)
costArr[start] = 0
const queue = [[start, 0]]

while (queue.length) {
  const [cityA, cost] = queue.shift()
  if (cost > costArr[cityA]) continue
  for (const [cityB, nCost] of schedule[cityA]) {
    if (costArr[cityA] + nCost < costArr[cityB]) {
      costArr[cityB] = costArr[cityA] + nCost
      queue.push([cityB, costArr[cityB]])
    }
  }
}
console.log(costArr[end])