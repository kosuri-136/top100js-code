// L E X I C A L

//def 1 : ""Lexical scope is the ability for a function scope to access 
//        variables from the parent scope. ""
//        We call the child function to be lexically bound by that of the parent function.

// JavaScript uses lexical scoping to resolve the variable 
// names when a function is created inside another function. 
// It determines the function's parent scope by looking at where
// the function was created instead of where it was invoked.

let x =1;

function one(){
    console.log(x);
    console.log(y); // z and y are not defined here but it searches in
                    // its lexical scope 
    let z = 90;
    function inner(){
        console.log(z);
    }
    inner()
}

let y =40;

one()
