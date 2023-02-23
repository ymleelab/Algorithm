const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let score = fs.readFileSync(filePath).toString().trim();
console.log(getGrade(+score))

function getGrade(score) {
    const grade = [[90, 'A'], [80, 'B'], [70, 'C'], [60, 'D'], [0, 'F']]
    
    for(let i = 0; i < grade.length; i++) {
        if(score >= grade[i][0]) return grade[i][1]
    }
}