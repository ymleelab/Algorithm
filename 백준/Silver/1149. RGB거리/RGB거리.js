const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [N, ...rgb] = fs.readFileSync(filePath).toString().trim().split("\n");
const rgbArr = rgb.map(v => v.split(' ').map(v => +v))
const dp = Array.from(Array((+N)+1)).map(v => Array(3).fill(0))
dp[1] = rgbArr[0]

for(let i = 2; i <= N; i++) {
  dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + rgbArr[i-1][0]
  dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + rgbArr[i-1][1]
  dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + rgbArr[i-1][2]
}

console.log(Math.min(...dp[N]))