let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let arr = readLine().split(" ");
let l = arr.length;
let x = arr[l-1]++;
console.log(arr);