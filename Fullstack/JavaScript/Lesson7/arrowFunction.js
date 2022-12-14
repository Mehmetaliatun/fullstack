//** -----Arrow------ */

// let vkiHesaplama = (kilo, boy) => kilo / (boy * boy);
// console.log(vkiHesaplama(64, 1.74));

// const topla = (a, b) => a + b;

// console.log(topla(2, 3));

// const usAl = (t, u) => t ** u;
// console.log(usAl(2, 3));

// let selamVer = () => "sea";
// alert(selamVer(""));

//* Orn;Silindir Hacmi
//*** */

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;
// console.log(`${r},${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r},${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

//* Orn2; Yas hesapla
//*** */

// const tarih = Number(prompt("dogum tarihi giriniz:"));

//! arrow yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;

//   return yas;
// };
// console.log("yasiniz:" + yasHesapla(tarih));

//?-----------------------------------------------

//! func expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;

//   return yas;
// };

// console.log("yasiniz:" + yasHesapla2(tarih));

//?-----------------------------------------------

//! func declaration yontemi ile tanimlama
// console.log("yasiniz:" + yasHesapla3(tarih));

// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;

//   return yas;
// }

//?-----------------------------------------------

//* Arrow kisa alternatif

// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;
// console.log("yasiniz:" + yasHesaplaKisa(tarih));

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// f(n) = f(n-1) + f(n-2)

// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let toplam = 0;
//   for (let i = 2; i < n; i++) {
//     toplam = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = toplam;
//     console.log(toplam);
//   }
//   return fib2;
// };
// const n = +prompt("n terimini giriniz:");
// if (n <= 0) {
//   console.log("lutfen 0'dan buyuk deger giriniz");
// } else {
//   console.log(`FIBO(${n})=${fibo(n)}`);
// }

//*Recursive */

// const fibo = (n) => {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// };
// const n = +prompt("n terimini giriniz:");
// console.log(`FIBO (${n})= ${fibo(n)}`);

//* Scope */

// let sayi1 = 5;
// console.log(sayi1);

// const fonks1 = function () {
//   sayi1 = 22;
//   console.log(sayi1);
// };
// fonks1();

// console.log(++sayi1);
// console.log(sayi1);

//? ----------------------------------------------

let sayi2 = 7; //!Global scope
console.log(sayi2); //! 7

const fonks2 = () => {
  let sayi2 = 11; //!Function scope
  console.log(sayi2); //! 11
};
fonks2();
console.log(sayi2); //! 7
// console.log(sayi2);

if (sayi2 === 8) {
  let sonuc = "mrb";
} else {
  sonuc = "nbr";
}
console.log(sonuc);
