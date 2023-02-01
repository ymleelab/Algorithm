const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim();

console.log(solution());

function solution() {
    const [a, b] = input.split(' ').map(n => Number(n))
    const arr = [a+b, a-b, a*b, Math.floor(a/b), a%b]
    const result = arr.join('\n')
    return result
}