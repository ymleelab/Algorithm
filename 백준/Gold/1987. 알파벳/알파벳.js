const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const [size, ...inputArr] = fs.readFileSync(filePath).toString().trim().split('\n')
const [R, C] = size.split(' ').map(Number)
const board = inputArr.map(v => v.split(''))
const offsetX = [0, 0, -1, 1];
const offsetY = [-1, 1, 0, 0];

const dfs = (x, y, count, visited) => {
  let maxCount = count;

  visited[board[x][y].charCodeAt() - 65] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + offsetX[i];
    const ny = y + offsetY[i];
    if (nx >= 0 && nx < R && ny >= 0 && ny < C && !visited[board[nx][ny].charCodeAt() - 65]) {
      maxCount = Math.max(maxCount, dfs(nx, ny, count + 1, visited));
    }
  }
  visited[board[x][y].charCodeAt() - 65] = false;

  return maxCount;
};

const visited = Array(26).fill(false);
console.log(dfs(0, 0, 1, visited));