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

//! number virgullu olanlari donusturur fakat string olursa olmuyor.

//* number veri tipinden string'e dondurme

let number6 = 66;
number6 = number6.toString();
console.log(number6, typeof number6);

//* ------------------ Template Literals

let userName = "mehmet";
const domain = "atun.org";

let email = userName + "@" + domain;
console.log(
  "Maraba",
  userName,
  "gardas siteye hosgeldin,",
  "email adresin:",
  email
);

let info = `Maraba, ${userName} gardasim. mail adresin: ${email}, mail adresinin uzunlugu: ${
  email.length
}
kisa isminiz:${userName[0]}
borcunuz: ${2 * 5 * 10} ₺
gunun saati: ${new Date().getHours()}
`;
console.log(info);

//* ------------------------ String veri turu islemleri

let email1 = "mehmetaliatun6@gmail.com";
let firstName = "mehmet";
let lastName = "ATUN";

//* length
console.log(email1.length);

//* ilk karakter bulma
console.log(firstName[0]);
console.log(firstName.charAt(0));

//* buyuk kucuk harf

firstName = firstName.toUpperCase();
console.log(firstName);
lastName = lastName.toLocaleLowerCase();
console.log(lastName);

//* string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search:

console.log(email1.search("h"));
console.log(email1[2]);

email.search("olmayan"); // -1 verir

//* belli bir yere kadar al -> slice
let domain1 = email1.slice(email1.search("@") + 1);
//* +1 ile birlikte istedigimiz yerin 1 sonrasindan baslar
console.log(domain1);
console.log(domain1.slice(0, domain1.indexOf("."))); //* sadece gmail kisini aldik

//* bilgiyi degistir -> replace:

let emailDev = email1.replace("gmail.com", "developer.com");
console.log(emailDev);

//* istedigim bilgi var mi -> icludes:

console.log(emailDev.includes("@"));

//* istedigim bilgiyle basladi mi ?-bitti mi? -> startsWidth, endsWidth:

console.log(emailDev.endsWith("com")); //* true doner.

//* ilk harflerini kucuk yapmak

let fullName1 = `${firstName[0].toLowerCase()}${firstName.slice(1)}`;
console.log(fullName1);
