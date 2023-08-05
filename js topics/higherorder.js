// HIGHER ORDER FUNCTION IS A FUNCTION THAT RECIVES -
// ANOTHER FUNCTION AS ARGUMENT OR RETUEN ANOTHER FUNCTION OR BOTH

// MAP FILTER REDUCE ETC

function first(fun){
    fun()
}
function second(){
    console.log("this is second one")
}

first(second);
second();


let arr = [1,2,3,4,5,6];

function square(arr){
    let squares=[];
    for(ele of arr)
    {
        let result = ele*ele;
        squares.push(result);
    }
    console.log(squares);

}square(arr)

