const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().toUpperCase().split("");

let obj = {};
input.map((inputChar) => {
  if (obj[inputChar] === undefined) obj[inputChar] = 1;
  else obj[inputChar] += 1;
});

let charCount = 0;
let resultChar = "";
for (char in obj) {
  if (charCount < obj[char]) {
    resultChar = char;
    charCount = obj[char];
  } else if (charCount === obj[char]) {
    resultChar = "?";
  }
}
console.log(resultChar);