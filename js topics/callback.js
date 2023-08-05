// call back function is a function that is passing as argument to another function

// function test(a){

//         console.log(test());

// }
// test(function(){
//     console.log("call back function");
// })

function first(){
   
    console.log("first");
}

function second(){
    console.log("second");
}

second();   // fumctions gives what u disclared first not what u defined
first();
