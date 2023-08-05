// PURE FUNCTION - It has no side effects       
//               - It is predictable

// def ;- A pure function in JavaScript is a function that returns the same result 
// if the same arguments(input) are passed in the function.

function pure(a,b)
{
    return a*b
}
console.log(pure(6,9));
console.log(pure(6,9));
console.log(pure(6,9));


//IMPURE FUNCTION

//def An impure function is a function that contains one or more side effects. 


function impure(C,D)
{
    return C*D+Math.random()
}
console.log(impure(90,9));
console.log(impure(90,9));
console.log(impure(90,9));



