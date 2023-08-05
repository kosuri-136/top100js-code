function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

// take input
const string = 'abssvs';
const result = capitalizeFirstLetter(string);
console.log(result);

let str = "hello world";
let capitalized = str.charAt(0).toUpperCase() + str.slice(0);
console.log(capitalized); // output: "Hello world"
