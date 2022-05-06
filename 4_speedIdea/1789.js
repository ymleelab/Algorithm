const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let input = [];
rl.on('line', (line) => input.push(line)).on("close", () => { 
    let sum = 0;
    let i = 1;
    while(true) {
        sum += i;
        if(sum > input[0]) {
            i--;
            break;
        } else if(sum == input[0]) {
            break;
        }
        i++;
    }    
    console.log(i);
    process.exit();
})