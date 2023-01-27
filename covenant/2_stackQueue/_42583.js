function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let queue = [];
    let queueSum = 0;
    
    for(let i =0;i<bridge_length;i++){
        queue.push(0);
    }
    let now_truck = truck_weights.shift();
    
    queue.unshift(now_truck);
    queue.pop();
    queueSum += now_truck;
    answer++;

    while(queueSum){ 
        queueSum -= queue.pop();
        now_truck = truck_weights.shift();

        if(now_truck+queueSum<=weight){
            queue.unshift(now_truck);
            queueSum+=now_truck;
        }
        else{
            queue.unshift(0);
            truck_weights.unshift(now_truck);
        }
        answer++;
    }
    return answer;
}
//https://velog.io/@kimtaeeeny/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EC%A7%80%EB%82%98%EB%8A%94-%ED%8A%B8%EB%9F%AD-javascript


/*function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let passing = [];
    let sum = 0;
    for(let i = 0; i < truck_weights.length; i++) {
        console.log(`i = ${i} sum + truck_weights[i] = ${sum + truck_weights[i]}`)
        while(sum + truck_weights[i] > weight) {
            if(!(sum < weight && passing.length === 1 && passing.length == bridge_length)) {
                answer += bridge_length-1;
            }
            sum -= passing[0];
            passing.shift();
        }
        passing.push(truck_weights[i]);
        answer++;
        sum += truck_weights[i];
        
        console.log(answer);
        console.log(passing);
    }
    console.log(passing.length);
    while(passing.length > 0) {
        answer += bridge_length;
        sum -= passing[0];
        passing.shift();
        
        console.log(answer);
    }
    return answer;
}*/