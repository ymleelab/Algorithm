const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

let input = 0
rl.on('line', line => input = line).on("close", () => {
    if(input < 100) {
        console.log(input);   
    } else {
        let count = 99;
        for(let num = 100; num <= input; num++) {
            let inputArr = String(num).split('')
            //2자릿수 - 1자릿수와 3자릿수 - 2자릿수의 값이 같으면 한수
            if(inputArr[1] - inputArr[0] == inputArr[2] - inputArr[1]) {
                //console.log(num);
                count++;
            }
        } 
    console.log(count);
    }
})
//1~99
//111 123 135 147 159 210 