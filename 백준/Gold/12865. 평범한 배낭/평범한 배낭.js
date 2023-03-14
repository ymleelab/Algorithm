const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(v => +v)
const items = input.map((str) => str.split(' ').map(v => +v))
const DP = Array.from(Array(N+1)).map(x => Array(K+1).fill(0))
items.unshift(0);

for(let i = 1; i <= N; i++) {
  const [weight, value] = items[i]
  for(let j = 0; j <= K; j++) {
    if(j < weight) {
      DP[i][j] = DP[i-1][j]
    } else {
      DP[i][j] = Math.max(DP[i-1][j], DP[i-1][j-weight] + value)
    }
  }
}

console.log(DP[N][K])