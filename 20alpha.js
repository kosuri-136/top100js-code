let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a = readLine();
let words = a.split('');
words.sort();
for(let element of words)
{
    console.log(element);
}