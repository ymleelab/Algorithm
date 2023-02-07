const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution();

function solution() {
  input.shift();
  input.map((data) => {
    const [H, W, N] = data.split(" ").map((n) => Number(n));
    let floor = H;
    let room;
    
    if (N <= H) {
      console.log(Number(namingRoom(N, 1)));
    } else {
      for (room = 1; room <= W; room++) {
        if (H * room >= N) {
          break;
        }
        floor = N - H * room;
      }
      console.log(Number(namingRoom(floor, room)));
    }
  });
}

function namingRoom(floor, room) {
  return room < 10 ? floor + "0" + room : floor + String(room);
}