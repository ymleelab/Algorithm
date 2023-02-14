const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [T, ...inputArr] = fs.readFileSync(filePath).toString().trim().split("\n");
const max = 11
const dp = new Array(max).fill(0)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for(let i = 4; i < max; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
}
for(let i = 0; i < T; i++) {
    console.log(dp[inputArr[i]])
}