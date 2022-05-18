let d = Array.from({length: 10000}).fill(0);

for (let i = 1; i <= 10000; i++) {
    d[dn(i)] = 1;
    //console.log(d)
    if(d[i] == 0) console.log(i);
}

function dn(i) {
    //각각의 자릿수의 값을 합하기
    let eachNumber = String(i).split('')
    let result = eachNumber.reduce((acc, el) => {
        return acc + Number(el)
    }, 0)
    //입력값과 자릿수 값의 합을 더하기
    return i + result;

    //console.log(i)
    let res = i;
    if (i >= 10000) { 
        res += Math.floor(i / 10000);
        i %= 10000; 
    }
    if (i >= 1000) { 
        res += Math.floor(i / 1000);
        i %= 1000; 
    }
    if (i >= 100) { 
        res += Math.floor(i / 100);
        i %= 100; 
    }
    if (i >= 10) { 
        res += Math.floor(i / 10);
        i %= 10; 
    }
    //console.log('dn :' + (res += i))
    //res += i
    //console.log(Math.floor(res))
    return Math.floor(res += i);
}