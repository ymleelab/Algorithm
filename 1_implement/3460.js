const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on('close', () => {
    let count = input[0];
    let binary;
    for(let i=1; i <= count; i++) {
        let result = '';
        let num = input[i];
        binary = (num % 2).toString();
        while(num > 1) {
            num = parseInt(num / 2);
            binary =  (num % 2) + (binary);
        }
        for(let j=binary.length-1; j >= 0; j--) {
            if(binary.charAt(j) === '1') {
                result += binary.length - j -1 + ' ';
            }
        }
        console.log(result);
    }
});