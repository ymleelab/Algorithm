const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input = Array.from(input).sort((a, b) => {
  const [axi, ayi] = a.split(" ");
  const [bxi, byi] = b.split(" ");

  if (axi === bxi) {
    return ayi - byi;
  }
  return axi - bxi;
});
console.log(input.join("\n"));