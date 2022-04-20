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
    let max = input*2 -1;
    let index = 1;
    for(let i=0; i < max; i++) {
    //console.log(i);
    //console.log(result);
        if(i < input) {
            for(let k=input-1; k > i; k--) {
                result += " ";
            }
            for(let j=0; j < i+1; j++) {
                result += "*";
                
            }
            for(let x=0; x < i; x++) {
                result += "*";
            }
        } else {
            for(let q=0; q < index+1; q++) {
                if(q != 0) {
                    result += " ";
                }
            }
            for(let w=input; w > index+1; w--) {
                result += "*";
            }
            for(let e=input; e > index; e--) {
                result += "*";
            }
            index++;
        }
        result += "\n";
    }
    console.log(result);
    process.exit();
}); 