function solution(nums) {
    var answer = 0;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')
    for(let i=0; i < nums.length-2; i++) {
        for(let j=i+1; j < nums.length-1; j++) {
            for(let k=j+1; k < nums.length; k++) {
                let num= nums[i]+nums[j]+nums[k];
                let check = 2;
                let isSosu = true;
                while(num > check) {
                    if(num % check == 0) {
                        isSosu = false;
                        break;
                    }
                    check++;
                }
                if(isSosu) {
                    answer++;
                }
            }
        }
    }
    return answer;
}