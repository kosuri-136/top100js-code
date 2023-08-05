function Person() {
    this.name = "ravi"
    this.age = 1000,
    this.greet=function(){
        console.log("hello"); 
    }
}
let person1 = new Person();
console.log(Person.__proto__.__proto__);
