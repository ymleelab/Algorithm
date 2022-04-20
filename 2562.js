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
    let result = numbers[0];
    let index = 0;
    for(let i=0; i < input.length+1; i++) {
        if(result < numbers[i]) {
            result = numbers[i];
            index = i;
        }
    }
    console.log(result);
    console.log(index+1);
});