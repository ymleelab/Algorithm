const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [str1, str2] = input
const DP = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0))

for(let i = 1; i <= str1.length; i++) {
  for(let j = 1; j <= str2.length; j++) {
    if(str1.charAt(i - 1) === str2.charAt(j - 1)) {
      DP[i][j] = DP[i - 1][j - 1] + 1
    } else {
      DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1])
    }
  }
}
console.log(DP[str1.length][str2.length])