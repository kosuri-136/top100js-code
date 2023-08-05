let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// class CarSell {
//     constructor(carValue, customerProposals)
//      {
//       this.carValue = carValue;
//       this.customerProposals = customerProposals;
//     }
  
//     getPromisingCustomers() 
//     {
//         let promisingCustomers = [];
//         for (let i = 0; i < this.customerProposals.length; i++) 
//         {
//           if (this.customerProposals[i] >= 0.9 * this.carValue)
//           {
//             promisingCustomers.push(i);
//           }
//         }
//         if (promisingCustomers.length === 0) {
//           console.log(-1);
//         } 
//         else {
//           for (let i = 0; i < promisingCustomers.length; i++) 
//           {
//             console.log(promisingCustomers[i]);
//           }
//         }
//       }
//     }
      
//       const x = parseInt(readLine());
//       const customerProposals = [];
      
//       for (let i = 0; i < x; i++) {
//         customerProposals.push(parseInt(readLine()));
//       }
      
//       const carSell = new CarSell(1000000, customerProposals);
//       carSell.getPromisingCustomers();
    
let carValue =1000000;
let n = parseInt(readLine());
for(i=0;i<n;i++)
{
    let x =parseInt(readLine());
    if(x >= 0.9 * carValue)
    {
        console.log(i);
    }
}