const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;
rl.on("line", (line) => {
    input = line;
    rl.close();
}).on("close", () => {
    let result = 1;
    for(let i= Number(input); i >= 1; i--) {
        result *= i;
    }    
    console.log(result);
    process.exit();
});