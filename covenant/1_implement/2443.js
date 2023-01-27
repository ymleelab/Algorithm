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
        for(let j=0; j < i+1; j++) {
            if(j != 0) {
                result += " ";
            }
        }
        for(let k=input; k > i+1; k--) {
            result += "*";
        }
        for(let k=input; k > i; k--) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
    process.exit();
}); 