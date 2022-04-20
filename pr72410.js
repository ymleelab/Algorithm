/*
* 신규 아이디 추천
*/
function solution(new_id) {
    let answer = '';
    answer = new_id.toLowerCase()        //소문자 치환
            .replace(/[^0-9a-z-_.]/g,"") //일부 문자를 제외한 모든 문자 제거
            .replace(/\.+/g,".")         //마침표 2번이상은 하나로 치환
            .replace(/^\./, '')          //처음 마침표 제거
            .replace(/\.$/, '');         //끝 마침표 제거

    if(!answer.length) {
        answer = "a";
    } else if(answer.length >= 16) {
        answer = answer.substr(0, 15).replace(/\.$/, '');
    }
    while(answer.length <= 2) {
        answer = answer.concat(answer[answer.length-1]);
    }
    return answer;
}
