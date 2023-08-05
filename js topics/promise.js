//A promise is a special JavaScript object that links the “producing code” and 
// the “consuming code” together. 

//Promise Object Properties
// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

//myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object


let p = new Promise(

    function(success,error){
       let database=true;
       if(database)
       {
        success([1,6,9])
       }
       else{
        error("no")
       }

    }
)
console.log(p);

p.then(function(data){       // then is called when promise is success
    console.log(data)
})

p.catch(function(errordata){       // catch is called when promised is error or failed
    console.log(errordata)
})

