const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, ...numList] = input.map((n) => Number(n));
const sortList = numList.sort((a, b) => a - b);
console.log(sortList.join("\n"));