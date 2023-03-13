const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ')
const [...arr] = input[1].split(' ').map(n => +n).sort((a, b) => a - b)

// let visited = Array(+N + 1).fill(0)
let answer = []
let answerOutput = []

DFS(0, 0)
console.log([...new Set(answerOutput)].join('\n'))

function DFS(d, idx) {  
  if(d == M) {
      answerOutput.push(answer.join(' '))
    return
  }

  for(let i = idx; i < N; i++) {
    // if(visited[i]) continue
    // visited[i] = true
    answer.push(arr[i]) 

    DFS(d + 1, i) // idx -> i

    answer.pop()
   // visited[i] = false
  }
}