let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let k =parseInt(readLine());
let sentence = readLine();
let words=[];
words=sentence.split(" ");
// console.log(words);
let count=[];
for(i=0;i<words.length;i++){
    let word = words[i];
    if(count[word]){
        count[word]++;
    }
    else
    {
        count[word]=1;
    }
    // console.log(count)
}
let final=[];
for(let word in count){
    if(count[word]>k)
    {
        final.push(word)
        // console.log(count[word])
    }
}
final.sort()
// console.log(final)

if(final.length===0)
{console.log("no")}
else{
    for(let i=0;i<final.length;i++)
    {
        console.log(final[i])
    }
}
// for(i=0;i<final.length;i++)
// {
//     console.log(final[i])
// }
// console.log(final)


