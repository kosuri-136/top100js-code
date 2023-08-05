// HIGHER ORDER FUNCTION IS A FUNCTION THAT RECIVES -
// ANOTHER FUNCTION AS ARGUMENT OR RETUEN ANOTHER FUNCTION OR BOTH

// MAP FILTER REDUCE ETC

let arr = [1,2,3,4,5,6];

function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}

function anyfunction(arr,operation){
    let result=[];
    for(ele of arr)
    result.push(operation(ele))
    return result;
}
let x = anyfunction(arr,cube);
console.log(x);
let y = anyfunction(arr,square);
console.log(y);

//below is DYNAMIC METHOD

let brr=[];
for(i=0;i<arr.length;i++)
{
    brr.push(arr[i]*arr[i]*arr[i]);
}
console.log(brr);


function three(){
    return four();
}
function four(){
    console.log("the function")
}

three()
