const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];
let result = "";
rl.on('line', (line) => input.push(line)).on("close", () => {
    input.map((line, i) => {
        if(i === 0) return;
        let arr = line.split(" ");
        let reverse = [];
        arr.forEach((el, i) => {
            return reverse[i] = el.split("").reverse().join("");
        });
        result += reverse.join(" ") + "\n";
    });
    console.log(result)
    process.exit();
})