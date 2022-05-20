const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let input = 0;
rl.on('line', (line) => input = parseInt(line)).on("close", () => { 
    let stack = []
    if(input > 1022) {
        console.log(-1);
        return;
    }
    for (let i = 1; i <= 1023; i++) {
        let num = 0;
        let tmp = i;
        for(let j = 9; j >=0; j--) {
            if(tmp % 2 == 1) {
                num = num * 10 + j
            }
            tmp = Math.floor(tmp / 2)
        }
        stack.push(num)
    }
    stack.sort((a, b) => a-b)    
    console.log(stack)  
    console.log(stack[input])
})
/*
0~9
10 20 21 30 31 32 40 41 42 43 ...
210 310 321 
3210
43210
543210
..
76543210, ...



876543210, //8
976543210, //97
986543210, //986
987543210, //9875
987643210, //98764
987653210, //987653
           //9876542
           //98765431
           //987654320
987654321, //987654321


9876543210


*/





























/*const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let input = 0;
rl.on('line', (line) => input = parseInt(line)).on("close", () => { 
    if(input <= 10) {//10까지는 입력값이 감소하는 수이므로 결과값이 동일
        console.log(input);
        return;
    }
    if(input > 1023) {
        console.log(-1);
        return;
    }
    let result = 10;//감소하는 수 카운트
    let checkNum = 11;//현재 확인하고 있는 수
    while(true) {
        checkNum = checkNum.toString()
        let checkFlag = true;
        for(let j = 0; j < checkNum.length -1; j++) {
            if(checkNum.charAt(j) <= checkNum.charAt(j + 1)) {
                checkFlag = false;
                break;
            }
        }
        if(checkFlag == true) result++;
        if(result == input) break; //감소하는 수 갯수가 입력값과 같으면 무한루프 종료
        checkNum++
    }
    console.log(checkNum);
})*/
//1~10
//20, 21
//30, 31, 32
//40, 41, 42
//18번째 감소하는 수