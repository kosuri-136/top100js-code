// program to replace all occurrence of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/gi;              /// g is global and i is case Insensitive


// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);