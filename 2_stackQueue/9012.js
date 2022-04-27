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
        let arr = line.split("")
        let pop = [];
        let vps = true;

        arr.forEach(el => {
            if(el === "(") {
                pop.push(el);
            } else if(el === ")" && pop.length !== 0) {
                pop.pop();
            } else if(el == ")" && pop.length === 0) {
                vps = false; 
                return;
            }
        });
        if(pop.length !== 0) vps = false;
        result += vps ? "YES" : "NO";
        result += "\n";
    });
    console.log(result)
    process.exit();
});