const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let [N, input] = fs.readFileSync(filePath).toString().trim().split('\n')
N = Number(N)
input = input.split(' ').map(Number)
const upDP = Array(N).fill(1)
const downDP = Array(N).fill(1)

for(let i = 1; i < N; i++) {
    const curr = input[i]
    let count = 1
    for(let j = 0; j < i; j++) {
        const before = input[j]
        if(curr > before) {
            count = Math.max(count, upDP[j] + 1)
        }
    }
    upDP[i] = count
}

for(let i = N- 2; i >= 0; i--) {
    const curr = input[i]
    let count = 1
    for(let j = i + 1; j < N; j++) {
        const before = input[j]
        if(curr > before) {
            count = Math.max(count, downDP[j] + 1)
        }
    }
    downDP[i] = count
}

const answer = upDP.map((val, idx) => val + downDP[idx])
console.log(Math.max(...answer) - 1)