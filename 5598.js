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
    let result = "";
    for(let i=0; i < input.length; i++) {
        let chr = "";
        if(input.charAt(i) == "A") {
            chr = "X";
        } else if(input.charAt(i) == "B") {
            chr = "Y";
        } else if(input.charAt(i) == "C") {
            chr = "Z";
        } else {
            chr = String.fromCharCode((input.charCodeAt(i)) - 3);
        }
        result += chr;
    }    
    console.log(result);
    process.exit();
}); 