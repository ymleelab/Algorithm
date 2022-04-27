const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on('close', () => {
    const numbers = input.map((x) => Number(x));
    const ods = numbers.filter(v => v % 2 === 1);
    if(ods.length != 0) {
        let sum = 0;
        let min = ods[0];
        for(let i=0; i < ods.length; i++) {
            sum += ods[i];
            if(min > ods[i]) {
                min = ods[i];
            }
        }
        console.log(sum);
        console.log(min);
    } else {
        console.log(-1);
    }
});