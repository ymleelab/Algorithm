function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}


/*function solution(priorities, location) {
    var answer = 0;
    let nowArr = [...priorities];
    let checkIndex = 0;
    let orderedArr = [];
    let targetPri = location;
    for(let i = 0; i < nowArr.length; i++) {
        //최대값 찾고
        if(Math.max(...nowArr) === priorities[i]) {
            orderedArr[orderedArr.length] = priorities[i];
            checkIndex = i;
            let orderedIndex = 0;
            //최대값 뒤 새로운 배열에 삽입
            while(i < priorities.length) {
                //console.log(`i ${i} p ${priorities.length}`)
                orderedArr[orderedIndex++] = priorities[i++];
            }
            //그 이후 최대값 앞 새로운 배열에 삽입
            for(let j = 0; j < checkIndex; j++) {
                //console.log(`j ${j} p ${checkIndex-1}`)
                orderedArr[orderedIndex++] = priorities[j];
            }
            
            //판별 최대값이면
            if(targetPri == checkIndex) {
                return orderedIndex+1;
            }
            //0 2
            //4 = 6 - 2 + 0
            //인덱스가 앞쪽일때 새로운 배열의 인덱스
            if(targetPri < checkIndex) {
                return targetPri = priorities.length-checkIndex+targetPri;
            }
            //3, 2
            //1
            //인덱스가 뒤쪽일때 새로운 배열의 인덱스
            if(targetPri > checkIndex) {
                return targetPri = targetPri-checkIndex;
            }
            console.log(targetPri);
            //console.log(checkIndex);
            console.log(orderedArr);
            console.log(nowArr);
           // i = -1;
        }
        //console.log(i);
    }
    return answer;
}*/