/*
* 신규 아이디 추천
*/
function solution(new_id) {
    let answer = '';
    //소문자 치환
    //일부 문자를 제외한 모든 문자 제거
    //마침표 2번이상은 하나로 치환
    answer = new_id.toLowerCase().replace(/[^0-9a-z-_.]/g,"").replace(/\.+/,".");
    //...
    return answer;
}
