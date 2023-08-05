// program to remove a property from an object

// creating an object
const student = { 
    name: 'John', // key:value// key is name and value is john ----------- KEY VALUE PAIR
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];
console.log(student);
