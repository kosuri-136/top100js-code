second();  
first();

// function declaration in javascript are hoisted to the top of enclosing 
// function or global scope.You can use the function before you declared it

function first(){
   
    console.log("first");
}

//function HOISTING Not working for function expression 
// i.e function assigned to a variable

let x = function second(){
    console.log("second");
}

