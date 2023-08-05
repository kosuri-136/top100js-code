let person = {
    name : "ravi",
    gender: "male",
    class : "mass",
    work:"formal",
}
let count =0;

for(key in person)
{
    count++;
}
console.log(count);



const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// const person = {
//     gender: 'male'
// }

student.__proto__ = person;

// let count = 0;

// for(let key in student) {

//     // increase the count
//     ++count;
// }

// console.log(count); // 4