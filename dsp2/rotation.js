// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

function rotateLeft(d, arr){
    // const n = arr.length;
    // const rotatearr = [];
    // for(i=0;i<n;i++){
    //     const place = (i+d) % n;
    //     rotatearr[i] = arr[place];
    //     }
    const place = d%arr.length;
    const rotatearr = arr.slice(place).concat(arr.slice(0,place))
        return rotatearr;
}
const arr = [1,2,3,4,5];
const d = 4;
const rotatearr = rotateLeft(d, arr)
console.log(rotatearr);
