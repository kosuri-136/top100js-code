let man ={
    name:"ravi",
    marks: 100,


    score: {
        m : 90,
        s : 99,
    }

}
console.log(man.marks);
console.log(man.name);
console.log(man.score.s);



/////////////////////using of constructor //////////////////////////////////

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// In the above example, the Person() constructor function is used to create an object using the new keyword.

new Person() creates a new object.

