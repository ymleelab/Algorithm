const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n')

const tree = input.reduce((acc, curr) => {
  const [node, left, right] = curr.split(' ')
  acc[node] = [left, right]
  return acc
}, {})

const preOrder = (node) => {
  if(node === '.') return ''
  const [left, right] = tree[node]
  return node + preOrder(left) + preOrder(right)
}

const inOrder = (node) => {
  if(node === '.') return ''
  const [left, right] = tree[node]
  return inOrder(left) + node + inOrder(right)
}

const postOrder = (node) => {
  if(node === '.') return ''
  const [left, right] = tree[node]
  return postOrder(left) + postOrder(right) + node
}

console.log(preOrder("A"))
console.log(inOrder("A"))
console.log(postOrder("A"))