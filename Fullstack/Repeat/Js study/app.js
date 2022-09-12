//* --------------------NUMBER-----------------

let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Price:",
  price,
  "Tax Perc.:",
  tax,
  "Tax price:",
  priceTax,
  "Total Price:",
  total
);

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number constractor icine bilgi gonderildi:", Number("111"));
//* inc. decr.

let counter = 20;
counter = counter + 1;
counter += 1;
counter++;
console.log(counter);

counter--;
console.log(counter);

counter *= 10;
console.log(counter);
counter /= 2;
console.log(counter);
