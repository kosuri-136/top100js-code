let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let k = parseInt(readLine());
let n = parseInt(readLine());
let index = -1;
for(i=0;i<n;i++)
{
    let x = parseInt(readLine());
    if(x==k)
    {
        index = i;
    }
}
console.log(index);