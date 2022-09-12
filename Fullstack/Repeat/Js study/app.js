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

//* -------------------- Veri turleri

let number1 = "11";
number1 = parseInt(number1);
console.log(number1, typeof number1);

let number2 = "11px";
number2 = parseInt(number2);
console.log(number2, typeof number2);

let number3 = "11.3px";
number3 = Number(number3);
console.log(number3, typeof number3); // icinde yazi olunca olmuyor.

let number4 = "44.3px";
number4 = parseFloat(number4);
console.log(number4, typeof number4); // yazi olsada sayi yapiyor

let number5 = "11.3";
number5 = Number(number5);
console.log(number5, typeof number5); // tam sayi yapiyor

//* number veri tipinden string'e dondurme

let number6 = 66;
number6 = number6.toString();
console.log(number6, typeof number6);
