let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let t = parseInt(readLine());
for(let i=0;i<t;i++){
    let x = ((readLine().split(" ")));
    let n = parseInt(x[0]);
    let k = parseInt(x[1]);
    // console.log(n)
    function notkilled(n,k){
        let p =0;
        for(let i=1;i<=n;i++){
            p = (p+k)%i;
        }
        return p+1;
    }
    let res = notkilled(n,k);
    console.log(res);
}

// console.log(n)

