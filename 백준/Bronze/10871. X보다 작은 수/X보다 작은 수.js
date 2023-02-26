const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, X] = input[0].split(' ')
const arr = input[1].split(' ').map(n => +n)

const answer = arr.filter(n => n < X).join(' ')
console.log(answer)