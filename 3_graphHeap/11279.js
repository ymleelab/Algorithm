const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let input = [];
let heap = [];
rl.on('line', (line) => input.push(line)).on("close", () => { 
    let max = 0;
    let index = 0;
    input.forEach((el, i) => {
        if(i === 0) return;
        if(el == 0) {
            //console.log('here')
            heap.forEach((v, j) => {
                // console.log(max);
                // console.log(v);
                if(max < v) {
                    max = v;
                    index = j;
                }
            })
            // console.log(index);
            // console.log(heap);
            // console.log(heap.splice(index, 1));
            // console.log(heap);
            heap.splice(index, 1)
            console.log(max);
            //console.log(heap.substr(index, heap.length -1));
            
        }
        else {
            //heap.push(el)
            //console.log(heap);
            heapInsert(el)
        }
    })
    process.exit();
})

function heapInsert(el) {
    if(!heap) heap.push('0')
    heap.push(el)
    
    console.log(heap)
    for(let i = heap.length -1; i > 1; i/=2) {
        if(heap[i/2] < heap[i]) {
            console.log(heap)
            swap(i/2, i);
            console.log(heap)
        }
    }
}
function swap(index1, index2) {
    let tmp = heap[index1];
    heap[index1] = heap[index2];
    heap[index2] = tmp;
}