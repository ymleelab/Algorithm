const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on('close', () => {
    let numbers = input[1].split(" ");
    numbers.sort((a,b) => a-b);
    console.log(numbers[0] * numbers[numbers.length-1]);
});