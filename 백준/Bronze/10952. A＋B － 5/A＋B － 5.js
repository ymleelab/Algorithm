const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution();

function solution() {
    input.map((str) => {
        const [a, b] = str.split(" ").map((n) => Number(n));
        if(a == 0 && b == 0) return
        else console.log(a + b)
    })
}