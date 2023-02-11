const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const [M, N] = input.split(' ').map(n => +n)
let arr = []

console.log(solution());

function solution() {
    for(let i = 2; i <= N; i++) {
        prime(i)
    }
    return arr.filter(n => n >= M).join('\n')
}

function prime(i) {
    for(let j = 0; j < Math.sqrt(arr.length); j++) {
        if(i % arr[j] === 0) return false
    }
    if(!arr.includes(i)) arr.push(i)
    return true
}