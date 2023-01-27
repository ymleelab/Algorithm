const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

let input = []
rl.on('line', line => input.push(line)).on('close', () =>{
    let str = input[0]
    const word = input[1]
    let count = 0

    while(true) {
        //str에 word 값이 있으면 앞 인덱스 반환
        const index = str.indexOf(word)
        //해당하는 값이 없으면
        if(index == -1) {
            console.log(count)
            break;
        }
        //있으면
        count++
        //str = str.substring(0, index) + 
        //앞은 제외하고 뒤쪽만 반환해서 다시 체크
        str = str.substring(index + word.length)
        //console.log(str)
    }
})