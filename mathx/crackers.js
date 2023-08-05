let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let x = readLine().split(" ");
let n = parseInt(x[0]);
let k = parseInt(x[1]);
// console.log(k)
function diff(n ,k){
    // let q = Math.floor(n/k);
    let r = n%k;
    let mindiff = Math.min(r,k-r);
    return mindiff;
}
let res = diff(n,k);
console.log(res);