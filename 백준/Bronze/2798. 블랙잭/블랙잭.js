const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution());

function solution() {
  const [N, M] = input[0].split(" ");
  const arr = input[1].split(" ").map((n) => Number(n));
  let max = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      for (let k = 2; k < N; k++) {
        if (arr[i] == arr[j] || arr[i] == arr[k] || arr[j] == arr[k]) {
          continue;
        }
        const sum = arr[i] + arr[j] + arr[k];
        if (sum <= M && max < sum) {
          max = sum;
        }
      }
    }
  }
  return max;
}