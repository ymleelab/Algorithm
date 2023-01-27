const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ");

console.log(solution());

function solution() {
  let count = 0;
  for (num of arr) {
    if (isPrime(num)) count++;
  }
  return count;
}
function isPrime(num) {
  if (num == 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}