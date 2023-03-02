const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const count = input.shift()

for(let i = 0; i < count; i++) {
  let arr = JSON.parse(input[i*3+2])
  const func = input[i*3]
  let isError = false
  let isReverse = false

  func.split('').map((el) => {
    if(el === 'R') {
      isReverse = !isReverse
    } else if(el === 'D') {
      if(arr.length > 0) {
        if(isReverse) {
          arr.pop()
        } else {
          arr.shift()
        }
      } else {
        isError = true
      }
    }
  })

  if(isError) {
    console.log('error')
  } else if(isReverse) {
    console.log(JSON.stringify(arr.reverse()))
  } else {
    console.log(JSON.stringify(arr))
  }
}