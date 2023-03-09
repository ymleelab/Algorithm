const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
N = +N
const dp = Array(N).fill(1)
const sequence = String(arr).split(' ').map(n => +n)

for(let i = 1; i < N; i++) {
  for(let j = 0; j < i; j++) {
    if(sequence[j] < sequence[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

console.log(Math.max(...dp))