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
//? at()
console.log(names.at(-1));

//! Diziye veri yazma
// const names = ["Ahmet", "berkay", "mehmet", "murat"];
names[1] = "ismail";
console.log(names);

//!Uncaught TypeError: Assignment to constant variable.
// names = ["ali", "ilteris"];

//? numbers dizisinin son elementinin degerini bir arttirmak
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

const yaslar = [26, 47, 55];
const kisiler = ["osman", "bumin", 2022, 2022 - 1996, true, yaslar];
console.log(kisiler);

//? kisiler icindeki yaslar dizisinde bulunan 51 yasini konsola yazdirin

const yas55 = kisiler[5][2];
console.log(yas55);

//? kisiler icindeki yaslar diziside bulunan 47 yasini 1 eksiltin
kisiler[5][1]--; //*46
kisiler[5][2]++; //*56
console.log(kisiler);

console.log(yaslar);

//? ------------------------------------------------------------
//? Diziyi degistiren (MUTATOR) Metotlar
//? ------------------------------------------------------------

const arabalar = ["Audi", "Opel", "Mercedes", "Ferrari"];

//** pop() son elemani siler ver sildigi elemani doldurur */
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur */
const n = arabalar.push("Ford");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini doldurur */

const n1 = arabalar.unshift("Bmw");
console.log(arabalar, n1);

//* dizinin 0. indeks elemanini siler ve silinen elamani doldurur */

const Bmw = arabalar.shift();
console.log(arabalar, Bmw);

//* Splice() method */
//?1.Parametre: eklenecek indis numarasi
//?2.Parametre: 0 araya ekleme, 1 ise uzerine yazma
//?2.Parametre: yeni eklenecek veri
arabalar.splice(1, 0, "PossatHiglan");
console.log(arabalar);

arabalar.splice(3, 1, "Nissan");
console.log(arabalar);

//* Reverse */
