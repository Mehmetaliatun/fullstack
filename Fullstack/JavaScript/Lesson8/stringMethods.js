// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");
//! Klasik yontem (String Literals) ile tanimlanirsa bu string bir
//! primitive degiskendir.

//! tek deger tutan primitive
//! bolean, integer, string, undeifned number,primitive veri tipi
//! non primitve ise object
const str1 = "Clarusway";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

//! Non-primitive String tanimlama
const str4 = new String("Hello FS");
console.log(typeof str4);

//?---------------------------------------
console.log(str1.toLocaleLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi;
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  Concat() - immutable
//* ---------------------------------------------------

console.log(str1.concat(str2));
console.log(str1, str2);

//? assigning ile degiskenin degeri degistirilebilir.

// str1 = str1.concat(str3, " Path");
// console.log(str1); //! hata verdi. */

// const myName = "Mehmet Ali";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

let yourName = "istanbul";
// yourName = yourName.toLocaleUpperCase();
// yourName = yourName.toLocaleUpperCase("tr");
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

const esitMi = (str1, str2) => {
  return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Esittir`
    : `${str1} ile ${str2} Esit degildir`;
};

console.log(esitMi("Merhaba", "MERHABA"));
console.log(esitMi("Hello", "Hella"));

//! suslu ve return olmadan da calisir.
// const esitMi = (str1, str2) =>
//   str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
// ? `${str1} ile ${str2} Esittir`
// : `${str1} ile ${str2} Esit degildir`;
// console.log(esitMi("Merhaba", "MERHABA"));
// console.log(esitMi("Hello", "Hella"));

// Ufak bir bilgi mülakatlarda karşınıza çıkabilir
// let str = "Mark";
// let str2 = str; // creates a copy
// str = "Noah";
// console.log(str); // Noah
// console.log(str2); // Mark immutable olduğu için değişmedi obje olsaydı değişirdi.

//* -----------------------------------------------------
//* LocaleCompare()
//* -----------------------------------------------------

const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

// console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

// 0 esit anlamina 1 ise esit degil anlamina geliyor.

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

//* -----------------------------------------------------
//* charAt()
//* -----------------------------------------------------
const str6 = "Full Stack Path";
console.log(str6.charAt(3));
