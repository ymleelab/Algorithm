const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
rl.on('line', input => {
    let minusArr = input.split('-') //console.log(minusArr) //[55, 50+40]
    let result = minusArr.reduce((acc, el, i) => {
        
        let plusArr = el.split('+') //console.log(plusArr)
        let plusAfter = plusArr.reduce((acc, el) => {
            return acc + Number(el)
        }, 0)

        //처음부터 + 이면 리턴
        if(i == 0) return plusAfter //console.log(acc +' '+  plusAfter) //10+20+30+40
        //아니면 첫연산 - 최대한 더한 값들
        else return acc - plusAfter
    }, 0)
    console.log(result)
    rl.close()
})