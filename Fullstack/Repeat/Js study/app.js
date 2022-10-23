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

//********************** Fonksiyonlar */

// function helloWorld() {
//   console.log("Hello World");
// }
// function hello() {
//   console.log("Merhaba");
//   helloWorld();
// }

// let userName = prompt("Enter your name");
// let age = prompt("Enter your age");
// function userCheck() {
//   if (userName && age >= 18) {
//     alert("You can enroll the driving licence");
//   } else if (!userName) {
//     alert("We need your name!");
//   } else if (!(age >= 18)) {
//     alert("You must enter your age or your age is under 18!");
//   }
// }
// userCheck();
// hello(); //? fonk calistirmak

// function factorial(n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else {
//     for (let i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   }
// }
// let n = prompt("enter a number want to show factorial");
// answer = factorial(n);
// console.log(answer);

//? fakt.

// function faktoriyel(e) {
//   let sonuc = 1;
//   if (e == 0 || e == 1) {
//     return sonuc;
//   } else {
//     for (let i = e; i >= 1; i--) {
//       sonuc = sonuc * i;
//     }
//     return sonuc;
//   }
// }
// let e = prompt("enter a number");
// sonuc = faktoriyel(e);
// console.log(sonuc);
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

// const arr1 = prompt("Bir sayi giriniz");

// let x = 0;
// async function test() {
//   x += await 2;
//   console.log(x);
// }
// test();
// x += 1;
// console.log(x);

// console.log("I");
// setTimeout(() => {
//   console.log("love");
// }, 0);
// console.log("Javascript!");

// var v = 1;
// var f1 = function () {
//   console.log(v);
// };
// var f2 = function () {
//   var v = 2;
//   f1();
// };
// f2();

//* Fonksiyona Parametre atamak */

// let firstName = "Lorem";

// function greetings(firstName = "", lastName = "") {
//   //* default parametre aliyor
//   //   console.log(`merhaba, ${firstName ? firstName : ""}`);
//   console.log(`merhaba, ${firstName}`);
//   console.log(`merhaba, ${firstName} ${lastName}`);
// }

// console.log(firstName); //* degisken
// // firstName = prompt("adın");
// // lastName = prompt("soyadin");
// // greetings(firstName, lastName);
// greetings(); //* fonksiyona parametre gondermedik ??
// greetings("parametre");

// function greetings2(firstName, lastName) {
//   let info = `merhaba ${firstName} ${lastName}`;
//   return info;
// }

// let greetingsInfo = greetings2("ad", "soyad");
// // let info = "deneme";
// console.log(greetingsInfo);

// function domIdWriteInfo(id, info) {
//   //   let domObject = document.querySelector(`#greeting`);
//   let domObject = document.querySelector(`#${id}`);
//   domObject.innerHTML = info;
// }

// let htmlInfo = `<span style="color:red">Color RED</span>`;

// // domIdWriteInfo("greeting", greetings2("mehmet", "ali"));
// domIdWriteInfo("greeting", htmlInfo);
// domIdWriteInfo("info", greetings2("lorem", "ipsum"));

//* Arrow function*/

// function hello(firstName) {
//   console.log(`Welcome, ${firstName}`);
// }

// hello("Hardest coding language is Js :)");

// const helloFuncV1 = (firstName) => {
//   console.log(`Welcome, ${firstName}`);
// };
// helloFuncV1("helloFuncV1");

// const helloFuncV2 = (firstName) => console.log(`Welcome, ${firstName}`); //* 1 parametre, 1 donus islemi
// helloFuncV2("helloFuncV2");

// const helloFuncV3 = (firstName, lastName) =>
//   console.log(`Welcome, ${firstName} ${lastName}`); //* console.log parantezi
// helloFuncV3("helloFuncV2", "last name info");

// const helloFuncV4 = (firstName, lastName) => {
//   let info = `Welcome, ${firstName} ${lastName}`;
//   console.log(info);
//   return info;
// };

// helloFuncV4("helloFuncV4", "other info");

// let input = document.getElementById("input");
// let output = document.getElementById("output");

// input.addEventListener("click", function (event) {
//   output.innerText = event.target.value.split("").join("");
//   console.log("calisiyor");
// });

// let counter = 0;
// let counterDOM = document.querySelector("#counter");
// let arttirDOM = document.querySelector("#arttir");
// let azaltDOM = document.querySelector("#azalt");

// counterDOM.innerHTML = counter;
// azaltDOM.addEventListener("click", clickEvent);
// arttirDOM.addEventListener("click", clickEvent);

// function clickEvent() {
//   console.log(this.id);
//   this.id == "arttir"
//     ? (counterDOM.innerHTML = counter += 1)
//     : (counterDOM.innerHTML = counter -= 1);
// }
//! 2.yontem
// function clickEvent() {
//   console.log(this.id);
//   this.id == "arttir" ? (counter += 1) : (counter -= 1);
//   counterDOM.innerHTML = counter;
// }
// let age = 24;
// let permission = age >= 18 ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

// console.log(permission);

//! LOOPS REPEAT (FOR_WHILE_DO-WHILE)

// for(start;condition;amountOfUpdate){
//     insideOfLoop
// }

//? false degerler
//! 0_null_empty_string_false_undefined_NaN

//* Ex: From 1 to n plus all numbers.

// let n = +prompt("bir sayi giriniz");
// let total = 0;
// //! toplamlarda baslangic degeri 0 vermek en iyisi.
// for (let i = 1; i <= n; i++) {
//   //   total = total + i;
//   total += i;
// }
// console.log(`TOTAL: ${total}`);

//* Ex-2:Random 10 numbers

// for (let i = 1; i <= 10; i++) {
//   const random = Math.round(Math.random() * 100);
//   console.log(random);
// }

//* Ex-3:
// const numb = +prompt("enter a positive number");
// let asal = true;
// //! kontrol amacli true/false atiyoruz ki break kismina direkt girebilsin.

// if (numb <= 1) {
//   alert("number is bigger than 1");
// } else {
//   for (let i = 2; i < numb; i++) {
//     //? i esit 2'ye; i numb'a kadar 1er artacak.
//     if (numb % i === 0) {
//       //? eger numb'in i'ye bolumunden kalan 0'a esit ise asal false degilse break'a giriyor.
//       asal = false;
//       break;
//     }
//   }
//   const sonuc = asal === true ? "ASAL" : "ASAL DEGIL";
//   //? sonuc atadik ve asal true ise asal değilse, değil.
//   console.log(`${numb} ${sonuc} `);
// }

// const carp = 9;
// for (let i = 1; i <= carp; i++) {
//   table = i * carp;
//   console.log(table);
// }

//*** WHILE */

// let yas = +prompt(
//   "Siteye girmek icin yasinizi giriniz:(18'den kucukler 25'ten buyukler giremez!)"
// );
// while (yas < 18 || yas > 25) {
//   alert("18 ile 25 yas arasi sitemizi kullanabilir");
//   yas = +prompt(
//     "Siteye girmek icin yasinizi giriniz:(18'den kucukler 25'ten buyukler giremez!)"
//   );
// }

//*** DO-WHILE */

// let girNot;
// do {
//   girNot = +prompt("bir not giriniz 0-100");
//   if (girNot < 0 || girNot > 100) {
//     alert("not 0-100 arası olmalı");
//   }
// } while (girNot < 0 || girNot > 100);

// console.log("girilen not", girNot);

// let thmn;
// // let rndm;
// const rndm = Math.round(Math.random() * 100);
// let hak = 5;
// do {
//   console.log(rndm);
//   let thmn = +prompt("0-100 arasi tahmin et");
//   if (thmn > rndm) {
//     hak -= 1;
//     alert("kucuk tahmin et");
//   } else if (thmn < rndm) {
//     hak -= 1;
//     alert("tahmini yukselt");
//   } else alert("dogru bildiniz");
// } while (hak > 0);
// } while (rndm == thmn);

//******* */

// let rndm = Math.round(Math.random() * 100);

// let thmn= +prompt("0-100 arasi tahmin et");
// if(thmn==rndm){
//     alert("dogru bildiniz")
//     for()
// }
