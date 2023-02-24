// https://www.acmicpc.net/problem/2741

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let num = fs.readFileSync(filePath).toString().trim();
const arr = []

for(let i = 1; i <= num; i++) {
    arr.push(i)
}

console.log(arr.join('\n'))
