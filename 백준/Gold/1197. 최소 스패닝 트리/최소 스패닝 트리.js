const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [size, ...inputArr] = fs.readFileSync(filePath).toString().trim().split('\n')
const [V, E] = size.split(' ').map(Number)
const tree = inputArr.map(v => v.split(' ').map(Number))
tree.sort((a, b) => a[2] - b[2])
const parent = Array.from({ length: V }, (_, i) => i)
let count = 0

const find = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent, parent[x]))
}

const union = (parent, a, b) => {
  a = find(parent, a)
  b = find(parent, b)
  if (a < b) parent[b] = a
  else parent[a] = b
}

const compare = (parent, a, b) => {
  a = find(parent, a)
  b = find(parent, b)
  return a === b
}

for (const [a, b, cost] of tree) {
  if (!compare(parent, a, b)) {
    count += cost
    union(parent, a, b)
  }
}

console.log(count)