//DESTUCTURING


let arr = ['ravi',"sai", "gopi"];
let [a,b,c] = arr;
console.log(c)


//def:-
// Destructuring is a JavaScript expression that makes it possible to  unpack
// values from arrays, or properties from objects, into distinct variables.


let person = {
    name:"ravi",
    age: 200
}
let {name,age}=person
console.log(name,age)