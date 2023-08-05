// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');
// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// let n = parseInt(readLine());
// let n1=0;
// for(i=0;i<n;i++)
// {
//     let x = n0+n1;
//     n0=n1;
//     n1=x;
//     console.log(x);
// }
let n = 5
let n1 = 0;
let n2 = 1; 
let s;
if (n <= 0) 
{
  console.log(-1);
}
 else if (n === 1) 
{
  console.log(n1);
}
 else 
{
  console.log(n1);
  console.log(n2);
  for (let i = 3; i <= n; i++) 
  {
    s = n1 + n2;
    console.log(s);
    n1 = n2;
    n2 = s;
  }
}