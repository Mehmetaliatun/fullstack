// ? ===============================================
// ?               FONKSIYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//* ORNEK:
//************************************************/

// function yasYazdir(ad, dogumTarihi) {
//   const yas = 2022 - dogumTarihi;
//   console.log(`Benim adım ${ad} ve ben ${yas}yaşındayım`);
//   return yas;
// }

// const yasMehmet = yasYazdir("Mehmet", 1996);
// const yasBerkay = yasYazdir("Berkay", 1977);
// const yasCuneyt = yasYazdir("Cuneyt", 2003);

// console.log(`Yaslarin ortalamasi = ${(yasMehmet + yasBerkay + yasCuneyt) / 3}`);

//* ORNEK:
//************************************************/
// yazdir();

//! Fonksiyonun tanimlanmasi(declaration)

// function yazdir() {
//   console.log("merhaba");
// }

// yazdir(); //* invoke, call, cagirma
// yazdir();

//* ORNEK-2:
//************************************************/

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

// function selamla(ad, soyAd = "") {
//   console.log(`Merhaba ${ad} ${soyAd}`);
// }
// selamla("Mehmet", "Ali");
// selamla("Berkay");

//* ORNEK-3:
//************************************************/

function yasHesapla(isim, dogumTarihi) {
  //   const sonuc = `${isim} ${2022 - dogumTarihi} yasindadir.`;
  //   const sonuc = `${isim} ${new Date().getFullYear() - dogumTarihi} yasindadir.`;
  return `${isim} ${new Date().getFullYear() - dogumTarihi} yasindadir.`;
  //   return sonuc;
}

const mesaj1 = yasHesapla("Yaren", 2000);
console.log(mesaj1);
console.log(yasHesapla("Berkay Oren", 1996));

//* ORNEK-4:
//************************************************/

//* Alttaki ornekte ilk sonucun tek cıkmasinin sebebi kalan 1 ve 1'in ayni zamanda true değer olduğu için, cift olan ise 0 olduğu icin ve false deger oldugu icin. */

// function tekCift(sayi) {
//   return sayi % 2 ? console.log("Tektir") : console.log("Cifttir");
// }

// tekCift(5);
// tekCift(8);
// tekCift(22);

function tekCift(sayi) {
  return sayi % 2 ? `${sayi}Tektir` : `${sayi}Cifttir`;
}

console.log(tekCift(5));
console.log(tekCift(8));
console.log(tekCift(22));

const sayi = +prompt("Bir sayi giriniz:");
console.log(tekCift(sayi));
