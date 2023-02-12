const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const computerCount = input.shift()
const networkCount = input.shift()
console.log(BFS(1))


function BFS(v) {
    let checked = []
    let bfs = []
    let count = 0
    checked.push(v)
    bfs.push(v)
    
    while(bfs.length > 0) {
        const num = bfs.shift()
        input.map(n => {
            const [a, b] = n.split(' ').map(n => +n)
            if(a === num && !checked.includes(b)) {
                checked.push(b)
                bfs.push(b)
                count++
            }
            if(b === num && !checked.includes(a)) {
                checked.push(a)
                bfs.push(a)
                count++
            }
        })
    }
    return count
}