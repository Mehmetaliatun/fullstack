// //* --------------------NUMBER-----------------

// let price = 100;
// let tax = 0.18;
// let priceTax = price * tax;
// let total = price + priceTax;
// console.log(
//   "Price:",
//   price,
//   "Tax Perc.:",
//   tax,
//   "Tax price:",
//   priceTax,
//   "Total Price:",
//   total
// );

// let stringNumber = "11";
// console.log(stringNumber);
// let newNumber = Number(stringNumber);
// console.log(newNumber);
// console.log("Number constractor icine bilgi gonderildi:", Number("111"));
// //* inc. decr.

// let counter = 20;
// counter = counter + 1;
// counter += 1;
// counter++;
// console.log(counter);

// counter--;
// console.log(counter);

// counter *= 10;
// console.log(counter);
// counter /= 2;
// console.log(counter);

// //* islem onceligi

// console.log(2 + 3 * 10);
// console.log((2 + 3) * 10);

// //* mod(kalan) alma %:
// //* sayi tek mi cift mi

// console.log(3 % 2); // 0 ise cift 1 ise tek

// //* 8 urun alan koliye tum urunler sigiyor mu?

// console.log("koli ornegi:", 18 % 8);

// //* us alma **:

// console.log(2 * 2 * 2 * 2);
// console.log(2 ** 4);

// //* asagi yuvarlama

// console.log("Asagi yuvarlama:", Math.floor(1.7));

// //* yukari yuvarlama

// console.log("yukari yuvarlama:", Math.ceil(1.9));

// //* yakina yuvarlama

// console.log("yakina yuvarlama:", Math.round(1.2));

// //* -------------------- Veri turleri

// let number1 = "11";
// number1 = parseInt(number1);
// console.log(number1, typeof number1);

// let number2 = "11px";
// number2 = parseInt(number2);
// console.log(number2, typeof number2);

// let number3 = "11.3px";
// number3 = Number(number3);
// console.log(number3, typeof number3); // icinde yazi olunca olmuyor.

// let number4 = "44.3px";
// number4 = parseFloat(number4);
// console.log(number4, typeof number4); // yazi olsada sayi yapiyor

// let number5 = "11.3";
// number5 = Number(number5);
// console.log(number5, typeof number5); // tam sayi yapiyor

// //! number virgullu olanlari donusturur fakat string olursa olmuyor.

// //* number veri tipinden string'e dondurme

// let number6 = 66;
// number6 = number6.toString();
// console.log(number6, typeof number6);

// //* ------------------ Template Literals

// let userName = "mehmet";
// const domain = "atun.org";

// let email = userName + "@" + domain;
// console.log(
//   "Maraba",
//   userName,
//   "gardas siteye hosgeldin,",
//   "email adresin:",
//   email
// );

// let info = `Maraba, ${userName} gardasim. mail adresin: ${email}, mail adresinin uzunlugu: ${
//   email.length
// }
// kisa isminiz:${userName[0]}
// borcunuz: ${2 * 5 * 10} ₺
// gunun saati: ${new Date().getHours()}
// `;
// console.log(info);

// //* ------------------------ String veri turu islemleri

// let email1 = "mehmetaliatun6@gmail.com";
// let firstName = "mehmet";
// let lastName = "ATUN";

// //* length
// console.log(email1.length);

// //* ilk karakter bulma
// console.log(firstName[0]);
// console.log(firstName.charAt(0));

// //* buyuk kucuk harf

// firstName = firstName.toUpperCase();
// console.log(firstName);
// lastName = lastName.toLocaleLowerCase();
// console.log(lastName);

// //* string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search:

// console.log(email1.search("h"));
// console.log(email1[2]);

// email.search("olmayan"); // -1 verir

// //* belli bir yere kadar al -> slice
// let domain1 = email1.slice(email1.search("@") + 1);
// //* +1 ile birlikte istedigimiz yerin 1 sonrasindan baslar
// console.log(domain1);
// console.log(domain1.slice(0, domain1.indexOf("."))); //* sadece gmail kisini aldik

// //* bilgiyi degistir -> replace:

// let emailDev = email1.replace("gmail.com", "developer.com");
// console.log(emailDev);

// //* istedigim bilgi var mi -> icludes:

// console.log(emailDev.includes("@"));

// //* istedigim bilgiyle basladi mi ?-bitti mi? -> startsWidth, endsWidth:

// console.log(emailDev.endsWith("com")); //* true doner.

// //* ilk harflerini kucuk yapmak

// let fullName1 = `${firstName[0].toLowerCase()}${firstName.slice(1)}`;
// console.log(fullName1);

//* --------------- COKLU KOSULLAR

// let userName = prompt("Please enter your name:");
// let age = prompt("Please enter your age:");
// let info = document.querySelector("#info");

// if (userName && age >= 18) {
//   alert("You can enroll the driving licence");
// } else if (!userName) {
//   alert("We need your name!");
// } else if (!(age >= 18)) {
//   alert("You must enter your age or your age is under 18!");
// }

//* ------------- TERNARY

// let userName = prompt("enter user name");
// let info = document.querySelector("#info");

// //* ternary kullanimi:
// //* kosul ? dogruysa : yanlissa

// console.log`#{userName.length > 0 ? userName: "kullanici bilgisi bulunamadi"}`;

//* Kosullar ile calismak

//! ------------------Not hesaplama

//* prompt ile aldigin bilgiye gore not bilgisini info'ya yazdir

// let grade = prompt("Notunuzu girin:");
// let textInfo;
// let happy = `🥳`;
// let sad = `😢`;

// if (grade >= 0 && grade <= 100) {
//   if (grade >= 90) {
//     textInfo = `${happy} AA`;
//   } else if (grade >= 85) {
//     textInfo = "BA";
//   } else if (grade >= 80) {
//     textInfo = "BB";
//   } else if (grade >= 75) {
//     textInfo = "CB";
//   } else if (grade >= 70) {
//     textInfo = "CC";
//   } else if (grade >= 65) {
//     textInfo = "DC";
//   } else if (grade >= 60) {
//     textInfo = "DD";
//   } else if (grade >= 50) {
//     textInfo = "FD";
//   } else if (grade < 50) {
//     textInfo = `${sad} FF`;
//   }
// } else if (grade > 100) {
//   textInfo = "100'den kucuk bir not giriniz";
// } else if (grade < 0) {
//   textInfo = "0'dan buyuk bir not giriniz!";
// }

// let info = document.querySelector("#info");
// info.innerHTML = ` ${grade} : ${textInfo} `;
// console.log(textInfo);

//! ------------------Hesap makinesi

// let sayi1 = Number(prompt("Birinci sayiyi giriniz:"));
// let islem = prompt("Yapmak istediginiz islemi seciniz:");
// let sayi2 = Number(prompt("İkinci sayiyi giriniz:"));
// let sonuc;

// if (islem === "/") {
//   sonuc = sayi1 / sayi2;
// } else if (islem === "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem === "+") {
//   sonuc = sayi1 + sayi2;
// } else if (islem === "-") {
//   sonuc = sayi1 - sayi2;
// }

// let info = document.querySelector("#info");
// info.innerHTML = `${sonuc}`;

// console.log(sonuc);

//! ------------------ Kredi Hesaplama

// let krediTuru = prompt("Ihtiyaciniz olan kredi turunu yaziniz:");
// let faiz1 = 1.89;
// let faiz2 = 1.69;
// let faiz3 = 1.99;
// let krediMiktari = Number(prompt("Ihtiyaciniz olan miktari giriniz:"));
// let vade = Number(prompt("Kac ay vade ile odemek istersiniz:"));
// let geriOdeme;

// if (krediTuru === "ev") {
//   geriOdeme = Math.round(
//     [(krediMiktari / 100) * (faiz1 / 12) * vade] + krediMiktari
//   );
// } else if (krediTuru === "arac") {
//   geriOdeme = Math.round(
//     [(krediMiktari / 100) * (faiz2 / 12) * vade] + krediMiktari
//   );
// } else if (krediTuru === "ihtiyac") {
//   geriOdeme = Math.round(
//     [(krediMiktari / 100) * (faiz3 / 12) * vade] + krediMiktari
//   );
// }

// let info = document.querySelector("#info");
// info.innerHTML = `${geriOdeme} ${"₺"}`;

// console.log(geriOdeme);

//* vowels regex

// function countVowel(str) {
//   // find the count of vowels
//   const count = str.match(/[aeiou]/gi).length;

//   // return number of vowels
//   return count;
// }

// // take input
// const string = prompt("Enter a string: ");

// const result = countVowel(string);

// console.log(result);

//* vowels
// // program to count the number of vowels in a string

// // defining vowels
// const vowels = ["a", "e", "i", "o", "u"];

// function countVowel(str) {
//   // initialize count
//   let count = 0;

//   // loop through string to test if each character is a vowel
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }

//   // return number of vowels
//   return count;
// }

// // take input
// const string = prompt("Enter a string: ");

// const result = countVowel(string);

// console.log(result);

//* diamonds

// function slope(val) {
//   document.write("function slope(" + val + ")<br>");
//   doubleit = val * 2;

//   for (i = 0; i < doubleit; i++) {
//     if (i < val) {
//       for (j = 0; j < i; j++) {
//         document.write("*");
//       }
//     }
//     if (i >= val) {
//       for (j = doubleit; j > i; j--) {
//         document.write("*");
//       }
//     }

//     document.write("<br>");
//   }
// }

// function diamond(val) {
//   doubleit = val * 2;
//   document.write("<center>");
//   document.write("function diamond(" + val + ")<br>");
//   for (i = 0; i < doubleit; i++) {
//     if (i < val) {
//       for (j = 0; j < i; j++) {
//         document.write("*");
//       }
//     }
//     if (i >= val) {
//       for (j = doubleit; j > i; j--) {
//         document.write("*");
//       }
//     }

//     document.write("<br>");
//   }

//   document.write("</center>");
// }

//*
// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++) {
//   // external loop
//   for (let j = 0; j < n; j++) {
//     // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

//! 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

// const arrOddEven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < arrOddEven.length; i++) {
//   a = arrOddEven[i];
//   if (a % 2) {
//     console.log(${a} is odd);
//   } else {
//     console.log(${a} is even);
//   }
// }

//! 2. Print a table containing multiplication tables
// Let's start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sayi = prompt("Please enter a number between 1-10.");
// for (i = 0, i < arr1.length; i++) {
//     const carpim = arr1[i];
//     let result = carpim * sayi
//     console.log(`${sayi} ${carpim} ${result}`);
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sayi = prompt("1'den 10'a kadar bir sayi giriniz.");

// for (i = 0; i < arr1.length; i++) {
//   const carpim = arr1[i];
//   let result = sayi * carpim;
//   console.log(`${sayi} * ${carpim} = ${result}`);
// }

// let kare = prompt("Karesini almak istediginiz sayiyi giriniz.");

// let sonuc = kare * kare;
// console.log(`${kare} * ${kare} = ${sonuc} `);

let knot = 1852;
let;
