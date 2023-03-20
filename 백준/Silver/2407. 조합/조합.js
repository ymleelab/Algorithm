const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0))
dp[0][0] = dp[1][0] = dp[1][1] = "1"

for(let i = 2; i <= N; i++) {
  for(let j = 0; j <= i; j++) {
    if(i === j || j === 0) dp[i][j] = "1"
    else dp[i][j] = addBigNumbers(dp[i - 1][j], dp[i - 1][j - 1])
  }
}
console.log(dp[N][M])


function addBigNumbers(num1, num2) {
  let result = ''
  let sum = 0

  while(num1.length > 0 || num2.length > 0 || sum > 0) {
    if(num1.length > 0) {
      sum += +num1[num1.length - 1]
      num1 = num1.slice(0, -1)
    }
    if(num2.length > 0) {
      sum += +num2[num2.length - 1]
      num2 = num2.slice(0, -1)
    }
    result += (sum % 10).toString()
    sum = Math.floor(sum / 10)
  }

  result = result.split('').reverse().join('')
  return result
}