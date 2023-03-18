const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [A, B, C] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt)

function pow(a, b) {
  // if(b == 0) return BigInt(1)
  if (b === 1n) return A % C

  const half = pow(a, b / BigInt(2)) % C

  if(b % BigInt(2)) return (half * half * (a % C)) % C
  else return (half * half) % C
}

// (A * B) mod C = (A mod C * B mod C) mod C
console.log(parseInt(pow(A, B)))