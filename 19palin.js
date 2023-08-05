// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');
// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }
// let p = readLine();
// let l = p.length;
// let isPalindrome = true;

// for(i=0;i<l/2;i++)
// {
//     if(p[i]!==p[l-1-i])
//         {
//             isPalindrome = false;
//             break;
//           }
//         }
        
//         if (isPalindrome) {
//           console.log(`is a palindrome.`);
//         } else {
//           console.log(` is not a palindrome.`);
//         }

let original = "raccssar"
let split = original.split('');
let rev = split.reverse();
let j = rev.join('');
if(j==original)
{
    console.log("palindrome");
}
else{
    console.log("not palindrom");
}