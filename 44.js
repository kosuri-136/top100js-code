let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}// function halfInsertionSort(str) {
//   const length = str.length;
//   
  
  // Sort the second half of the string using insertion sort
  let x = readLine();
  let length = x.length;
  let y = Math.floor(length / 2);//2
  for (let i = y; i < length; i++) // i=2;2<5 true // 3<5 true
  {
    let j = i - 1; // 2-1=1 // 3-1=2
    let value = x[i]; //value=c // value=b
    while (j >= y && x[j] > value)//2=2 true
    {
      x[j + 1] = x[j];// b=c
      j--;
    }
    x[j + 1] = value;
}
  
  console.log(x);
  
//   
// }

// // const result = halfInsertionSort("adcbe");
// // console.log(result); // Output: adbce
// let str = "adcbe";
// const length = str.length;
// const mid = Math.floor(length / 2);

// // Sort the second half of the string using insertion sort
// for (let i = mid; i < length; i++) {
//   let j = i - 1;
//   const temp = str[i];
//   while (j >= mid && str[j] > temp) {
//     str[j + 1] = str[j];
//     j--;
//   }
//   str[j + 1] = temp;
// }

// console.log(str); // Output: adbce
