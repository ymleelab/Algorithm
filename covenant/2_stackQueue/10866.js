const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let deque = [];
let result = "";
rl.on('line', (line) => input.push(line)).on('close', () => {
    input.map((line, i) => {
        if(i === 0) { return; }
        let order = line.split(" ")[0];
        switch(order) {
            case "push_front":
                deque.unshift(line.split(" ")[1]);
                return;
            case "push_back":
                deque.push(line.split(" ")[1]);
                return;
            case "pop_front":
                result += deque.length === 0 ? -1 : deque.shift();
                break;
            case "pop_back":
                result += deque.length === 0 ? -1 : deque.pop();
                break;
            case "size":
                result += deque.length;
                break;
            case "empty":
                result += deque.length === 0 ? 1 : 0;
                break;
            case "front":
                result += deque.length === 0 ? -1 : deque[0];
                break;
            case "back":
                result += deque.length === 0 ? -1 : deque[deque.length -1];
                break;
        }
        result += "\n";
    });
    console.log(result);
    process.exit();
});