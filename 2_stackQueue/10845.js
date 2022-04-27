const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let queue = [];
let result = "";
rl.on('line', (line) => input.push(line)).on("close", () => {
    input.map((line, i) => {
        if(i === 0) return;
        let order = line.split(" ")[0];
        switch(order) {
            case "push":
                queue.push(line.split(" ")[1]);
                return;
            case "pop":
                result += queue.length === 0 ? -1 : queue.shift();
                break;
            case "size":
                result += queue.length;
                break;
            case "empty":
                result += queue.length === 0 ? 1 : 0;
                break;
            case "front":
                result += queue.length === 0 ? -1 : queue[0];
                break;
            case "back":
                result += queue.length === 0 ? -1 : queue[queue.length -1];
                break;
        }
        result += "\n";
    });
    console.log(result);
    process.exit();
});