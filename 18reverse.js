let n = 1023457787321;
let r = 0;

while (n > 0) {
  r = (r * 10) + (n % 10);
  n = Math.floor(n / 10);
}

console.log(r); // Outputs: 54321




