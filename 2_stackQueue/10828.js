const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let stack = [];
let result = "";

rl.on("line", (line) => input.push(line)).on("close", () => {
    input.map((line, i) => {
        if(i === 0) { return; }
        else if(line.includes("push")) {
            stack.push(line.split(" ")[1]);
            return;
        } else {
            switch(line) {
                case "top":
                    if(stack.length === 0) { result += -1; break; }
                    result += stack[stack.length - 1];
                    break;
                case "size":
                    result += stack.length;
                    break;
                case "empty":
                    result += stack.length === 0 ? 1 : 0;
                    break;
                case "pop":
                    if(stack.length === 0) { result += -1; break; }
                    result += stack[stack.length - 1];
                    stack.pop();
                    break;
            }
            result += "\n";
        }
    });
    console.log(result);
    process.exit();
});