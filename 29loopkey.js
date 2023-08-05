// program to loop through an object using for...in loop

let student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};
// using for...in
for (let key in student) { 
    let value;
    // get the value
    value = student[key];
    console.log(key + " - " +  value); //////JUST ADDING - INSTEAD OF :SS
} 
console.log(student);