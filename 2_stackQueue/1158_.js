const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
/**
 * 1, 2, 3, 4, 5, 6, 7
 */
let input = [];
let result = "<";
rl.on('line', (line) => input.push(line)).on("close", () => {
    let num = input[0].split(" ");
    let arr = Array.from({length: num[0]}, (v, i) => i+1);
    while(arr.length) {
        for(let i = 0; i < num[1]; i++) {     
            //console.log(`i ${i} arr ${arr}`)
            arr.push(arr.shift());
        }
        //console.log(arr);
        if (arr.length === 1) {
            result += `${arr.pop()}>`;
        } else {
        result += `${arr.pop()}, `;
        }
    }
    console.log(result)
    process.exit();
})