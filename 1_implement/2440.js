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
        for(let k=input; k > i; k--) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
    process.exit();
}); 