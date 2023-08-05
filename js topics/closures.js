// In other words, a closure gives you access to an outer-
// function's scope from an inner function.

function outer(){
    var x=20;
    // console.log(y); // here y cannot be accessed from the inner function
    function inner(){
        var y =40;
        console.log(x); /// this x can be accessed from the outer function 
    }
    inner();
}
outer();


// even after excecution of function we can access variables of function

function outer1(){
    var x=20;
    
    function inner1(){
        var y =40;
        console.log(x); 
    }
    inner1();
}
var result = outer1();// here the excecution completed and scope of function outer ends

result() /// here out of the OUTER function we again accessing the variable or value