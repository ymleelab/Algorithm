//[0,0], [0,1], [1,0], [1,1], [2,2]
//[0,0], [0,1], [1,0], [1,1], [1,2], [2,1], [2,2]
function solution(n, computers) {
    var answer = 0;
    let visited = Array(n).fill(0)  //[0,0,0]

    for(let i=0; i< n; i++) {
        if(!visited[i]) {
            console.log(i)
            dfs(i)
            answer++
        }
    }
    return answer;

    function dfs(i) {
        visited[i] = 1; //[1,0,0], [1,1,0]
        for(let j=0; j< n; j++) {
            if(!visited[j] && computers[i][j] == 1) { //1, [0,1] //2, x
                console.log(`i : ${i} j : ${j}`)
                dfs(j)
            }
        }
    }
}