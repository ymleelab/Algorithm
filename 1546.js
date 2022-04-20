const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on('close', () => {
    let sum = 0;
    let max = 0;
    let numbers = input[1].split(" ");
    for(let i = 0; i < input[0]; i++) {
        if(max < Number(numbers[i])) {
            max = Number(numbers[i]);
        }
    }
    let result = numbers.map(v => Number(v)/max*100);
    for(let j = 0; j < input[0]; j++) {
        sum += result[j];
    }
    console.log(sum/input[0]);
});