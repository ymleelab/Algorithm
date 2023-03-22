const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split('\n')

for(let i = 0; i < T; i++) {
  const n = input[i * 3]
  const arr1 = input[i * 3 + 1].split(' ').map(Number)
  const arr2 = input[i * 3 + 2].split(' ').map(Number)
  const dp = [[0, arr1[0], arr2[0]]]

  for(let j = 1; j < n; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + arr1[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + arr2[j]
    ]
  }
  console.log(Math.max(...dp[n - 1]))
}