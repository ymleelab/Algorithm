const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
let input = []
rl.on('line', line => input = line.split('')).on('close', () => {
    let stack = []
    let count = 0
    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(') {
            stack.push(input[i])
        } else { // ')'
            if(input[i-1] == '(') {
                stack.pop()
                count += stack.length
                //console.log(stack + ' 직전이 ( ' + stack.length)
            } else {
                stack.pop()
                count++
                //console.log(stack + ' 아닌것 ' + stack.length)
            }
        }
    }
    console.log(count)
})
/*
() : 0
(()) : (1) 2
(()()) : (2) 3
(  (()())  (())  ()  )  (4) 5
(  (  (()())  (())  ()  )   ) (4) 5
https://www.acmicpc.net/problem/10799
*/