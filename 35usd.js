// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);

// program to format numbers as currency string

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);

let n = new Date();
console.log(n);
let x = n.getTime();
console.log(x);

let y = "  hejkk ejk jejke je e e e e e e e e ";
let z = y.split(" ").join("");
console.log(z);