const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
let input = []
rl.on('line', line => input.push(line)).on('close', () =>{
    let [ n, k ] = input[0].split(' ')
    let count = 0
    for(let i = n; i > 0; i--) {
        count += Math.floor(k/input[i])    //4200 / 1000 = 4.2
        k %= input[i]
    }
    console.log(count);
})
//마지막 n 부터 계산
//n부터 계산이라 k 보다 클 경우 count=0, k=변화없어서 if문 안넣어도 됨
//나머지 계산 = k %= input[i] = k -= (input[i] * Math.floor(k/input[i]))


/*
const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
let input = []
rl.on('line', line => input.push(line)).on('close', () =>{
    const [ n, k ] = input[0].split(' ')
    let index = -1
    let count = 0
    let result = Number(k)
    for(let i = 1; i <= n; i++) {
        console.log(input[i])
        if(input[i] >= result || i == n) {
            //console.log(input[i] + ' ' + result)
            if(input[i] == result || i == n) index = i;
            else index = i-1;

            //console.log(result/input[index])
            count += Math.floor(result/input[index])    //4200 / 1000 = 4.2
            result = result - (input[index] * Math.floor(result/input[index])) 
            //console.log(result + ' ' + count)
            if(result == 0 ) break;
            //if(result < input[1]) 
            i = 0;  //초기화
        }
    }
    console.log(count);
})*/