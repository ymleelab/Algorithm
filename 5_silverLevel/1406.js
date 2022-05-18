const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
let input = []
rl.on('line', (line) => {input.push(line)}).on('close', () =>{
    let leftStr = input[0];
    let rightStr = '';
    input.forEach((el, i) => {
        if(i == 0 || i == 1) {
            return;
        }
        let [cmd, chr] = el.split(' ')
        //console.log(leftStr + ' ' + cmd + ' ' + chr)
        if(cmd == 'P') {
            leftStr += chr
            //console.log(leftStr)
        } else if(cmd == 'L') {
            rightStr = leftStr.substr(-1) + rightStr
            leftStr = leftStr.slice(0, -1)
        } else if(cmd == 'B') {
            leftStr = leftStr.slice(0, -1)
        } else if(cmd == 'D') {
            leftStr = leftStr + rightStr.substr(0, 1)
            rightStr = rightStr.slice(1)
        }
        //console.log(leftStr + ' ' + rightStr)
    })
    console.log(leftStr + rightStr)
})