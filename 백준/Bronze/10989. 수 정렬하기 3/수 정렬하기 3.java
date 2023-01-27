// Java 11
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];

        for(int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        Arrays.sort(arr);

        for(int i = 0; i < N; i++) {
            sb.append(arr[i]).append('\n');
        }
        System.out.println(sb);
    }
}

// node.js 
/*
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const count = input[0];
input.shift();

solution();

function solution() {
  input.join("\n");
  input.sort().map((num) => console.log(num));
}*/