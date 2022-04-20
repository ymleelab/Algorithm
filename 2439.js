const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;
rl.on("line", (line) => {
    input = parseInt(line);
    rl.close();
}).on("close", () => {
    let result = "";
    for(let i=0; i < input; i++) {
        for(let k=input-1; k > i; k--) {
            result += " ";
        }
        for(let j=0; j < i+1; j++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
    process.exit();
}); 