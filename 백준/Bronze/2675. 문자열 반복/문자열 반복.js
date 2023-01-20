const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const length = Number(input[0]);

for (let i = 1; i <= length; i++) {
  const [count, str] = input[i].split(" ");

  let result = str
    .split("")
    .map((char) => char.repeat(count))
    .join("");

  console.log(result);
}