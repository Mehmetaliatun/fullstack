// !------------------------------------------------
// ! 2.YONTEM  : FUNCTION EXPRESSION
// !------------------------------------------------

console.log("****** FUNC EXPRESSION *********");

//* ORNEK:
//************************************************/

//! caanot access 'tekCift1' before initialization at;
// console.log(tekCift1(9));

//! funcition expression yontemi ile tanimlama

const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi}Tektir` : `${sayi}Cifttir`;
};

console.log(tekCift1(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");
// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));
console.log("Girilen sayilarin en buyugu:", buyukBul(-1, -9, 7));
console.log("Girilen sayilarin en buyugu:", buyukBul(-1, -9));

//* Ornek: Bir fonk. icerisinde baska fonksiyojnlar cagrilabilir.

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
  }
  return sonuc;
};

const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

console.log(hesapla(3, 5, "+"));
console.log(hesapla(25, 67, "*"));
