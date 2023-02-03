const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

solution();

function solution() {
    input.map((str) => {
        const [a, b] = str.split(" ").map((n) => Number(n));
        console.log(a + b)
    })
}