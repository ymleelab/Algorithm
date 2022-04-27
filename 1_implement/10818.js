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
    let numbers = input[1].split(" ");
    let max = numbers[0];
    let min = numbers[0];
    for(let i=0; i < count; i++) {
        let number = Number(numbers[i]);
        if(max < number) {
            max = number;
        }
        if(min > number) {
            min = number;
        }
    }
    console.log(min + ' ' + max);
});