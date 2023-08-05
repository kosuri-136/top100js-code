
    // CURRYING

    //Currying simply means evaluating functions with multiple arguments and
    //  decomposing them into a sequence of functions with a single argument.

function sum(a,b,c)
{
    return a+b+c
}
console.log(sum(7,7,7))


function addcurry(a)
{
    return function(b)
    {
        return function(c)          
        {
            return a+b+c
        }
    }
}
console.log(addcurry(7)(7)(7))      // taking many aruments 
                                     //curry into single arguments
