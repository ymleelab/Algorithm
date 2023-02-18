const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [T, ...inputArr] = fs.readFileSync(filePath).toString().trim().split("\n");
let dp = [[1, 0], [0, 1]]
const max = Math.max(...inputArr.map(n => +n))
    
for(let i = 2; i <= max; i++) {
    dp.push([dp[i-1][0] + dp[i-2][0], dp[i-1][1] + dp[i-2][1]])
}
for(n of inputArr) {
    console.log(dp[n][0], dp[n][1])
}