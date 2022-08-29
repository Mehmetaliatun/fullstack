// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

//! 1.yontem (Array Literal)-Tercih edilen yontem
const names = ["Ahmet", "berkay", "mehmet", "murat"];

console.log(names);
console.log(typeof names);
console.log(names.length);

const emp = [];
console.log(emp);

//! 2.yontem (Object Constructor)
const languages = new Array("C++", "Js", "Assembly", "Go", "Ruby");
console.log(languages);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlik bos bir Array olusturuldu.
const numbers1 = new Array(10);
console.log(numbers1);

//! 3.yontem (Array.of())

const veriler = Array.of(1, 2, 3);
console.log(veriler);
const veri = Array.of("Deneme");
console.log(veri);

//* Diziden veri okuma-yazma (indisleme)
//* -----------------------------------------------------------------

console.log(languages[2]);
const go = languages[3];
console.log(go);

console.log(names[names.length - 1]);
names.at();
