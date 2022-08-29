// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

//! 1.yontem (Array Literal)-Tercih edilen yontem
const names = ["ahmet", "berkay", "mehmet", "murat"];

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

arabalar.splice(3, 1, "Nissan", "Egea");
console.log(arabalar);

//* Reverse dizinin tamamini ters siraya cevirir*/

arabalar.reverse();
console.log(arabalar);

//* sort() diziyi alfabetik siralar */
//! By default, the sort() function sorts values as strings. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.

names.sort();
console.log(names);

const sayilar = [2, 31, 1, 25, 7, 6, 2289, 19882];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);
sayilar.sort((a, b) => b - a);
console.log(sayilar);

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1.eleman ve sonrasini -1 yap
console.log(array1);

//* -----------------------------------------------------------
const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------

console.log(sayilar1.includes(5)); //? true
console.log(sayilar1.includes("5")); //? false

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2
console.log(sayilar1.lastIndexOf(2)); //? 5

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join(""));
console.log(sayilar1.join());
console.log(sayilar1.join(" "));
console.log(sayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

//* slice()
//*-----------------------------------------------------------

//* concat()
//*-----------------------------------------------------------

//* every()
//*-----------------------------------------------------------

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

//* find()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.
