const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on('close', () => {
    let str = input[0];
    let result = "";
    for(let i = 97; i <= 122; i++) {
        let checked = -1;
        for(let j=0; j < str.length; j++) {
            if(str.charAt(j) == String.fromCharCode(i)) {
                checked = j;
                break;
            }
        }
        result += checked + ' ';
    }
    console.log(result);
});