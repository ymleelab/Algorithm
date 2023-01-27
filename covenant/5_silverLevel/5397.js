const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
let input = []
rl.on('line', (line) => input.push(line)).on('close', () => {
    input.forEach((el, i) => {
        if(i == 0) return;
        let arr = el.split('')
        let leftArr = []
        let rightArr = []
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == '<') {
                if(leftArr.length > 0) {
                    rightArr.push(leftArr.pop())
                    continue;
                }
            } else if(arr[i] == '>') {
                if(rightArr.length > 0) {
                    leftArr.push(rightArr.pop())
                    continue;
                }
            } else if(arr[i] == '-') {
                if(leftArr.length > 0) {
                    leftArr.pop()
                    continue;
                }
            } else if(/[a-zA-Z0-9]/.test(arr[i])) {
                leftArr.push(arr[i])
                continue;
            }
        }
        console.log(leftArr.join('')+rightArr.reverse().join(''))
    })
})