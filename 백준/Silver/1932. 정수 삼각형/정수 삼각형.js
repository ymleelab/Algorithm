const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n')
const triangle = arr.map(v => v.split(' ').map(v => +v))

for(let i = N - 1; i > 0; i--) {
  for(let j = 0; j < triangle[i].length - 1; j++) {
    triangle[i-1][j] += Math.max(triangle[i][j], triangle[i][j + 1])
  }
}
console.log(triangle[0][0])