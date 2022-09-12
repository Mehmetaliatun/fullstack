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

//* islem onceligi

console.log(2 + 3 * 10);
console.log((2 + 3) * 10);

//* mod(kalan) alma %:
//* sayi tek mi cift mi

console.log(3 % 2); // 0 ise cift 1 ise tek

//* 8 urun alan koliye tum urunler sigiyor mu?

console.log("koli ornegi:", 18 % 8);

//* us alma **:

console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

//* asagi yuvarlama

console.log("Asagi yuvarlama:", Math.floor(1.7));

//* yukari yuvarlama

console.log("yukari yuvarlama:", Math.ceil(1.9));

//* yakina yuvarlama

console.log("yakina yuvarlama:", Math.round(1.2));
