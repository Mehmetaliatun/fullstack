console.log("Hello World!");

//** Assignment-2 */

//*? # ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

//*? const number1 = +prompt("Bir sayi giriniz:");
//*? const operator = prompt("Bir operator giriniz.(+, -, /, *,)");
//*? const number2 = +prompt("Bir sayi giriniz:");
//*?  let sonuc = 0
//*?     switch (operator) {
//*?         case "+":
//*?             sonuc = number1 + number2;
//*?             break;
//*?         case "-":
//*?             sonuc = number1 - number2;
//*?             break;
//*?         case "/":
//*?             sonuc = number1 / number2;
//*?             break;
//*?         case "*":
//*?             sonuc = number1 * number2;
//*?             break;

//*?         default:
//*?                 alert("Yanlis islem yapildi.")
//*?             break;
//*?     }
//*?     console.log(`sonuc:${sonuc}`);

//* # ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//* const dersgunu = +prompt("Haftanin kacinci gunune gitmek istersiniz?");

//* switch (dersgunu) {
//*     case 1:
//*         console.log("Pazartesi gunu:Inclass");
//*         break;
//*     case 2:
//*         console.log("Salı gunu:Inclass");
//*         break;
//*     case 3:
//*         console.log("Carsamba gunu:Inclass");
//*         break;
//*     case 4:
//*         console.log("Persembe gunu:Inclass");
//*         break;
//*     case 5:
//*         console.log("Cuma gunu:Teamwork");
//*         break;
//*     case 6:
//*         console.log("Cumartesi gunu:Inclass+Teamwork");
//*         break;
//*     case 7:
//*         console.log("Pazar gunu:Off-day");
//*         break;

//*     default:
//*         alert("Haftada bulunan 7 gunden birisini secin");
//*         break;
//* }

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

//! let maas = +prompt("Maasinizi giriniz;");
//! const asgari_ucret = 5500;

//! if (maas > asgari_ucret) {
//!   maas = Math.floor(maas * 1.1);
//! } else {
//!   maas = Math.floor(maas * 1.5);
//! }
//! console.log(`Yeni maasiniz ${maas}`);

//*? ODEV4: Kredi Risk Programı
//*? Console’dan kişinin gelir ve gider miktarını alan
//*? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise  Kredi Verilebilir 🤑
//*? değilse Kredi Verilemez 🥺
//*? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.
//*?
//*?const gelir = +prompt("Gelirinizi girin:");
//*?const gider = +prompt("Giderinizi girin:");
//*?const asgari_ucret = 5500;
//*?const risk =
//*?  gelir - gider > asgari_ucret ? "Kredi alabilirsiniz" : "Kredi alamazsiniz";
//*?console.log(risk);
//*?
//*?-Ternery 2 kosul var ise kullanılır. Birisi true diğeri false vermeli. Yukaridaki ornek gibi. 2'den fazla kosul var ise ternery nest kullanılır.

//** Assignment-2 */

//*ODEV1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

//* let not;
//* let toplam = 0;
//* let sayac = 0;
//* while (true) {
//*   not = prompt(
//*     "Not giriniz veya cikmak için q/Q'ya basiniz."
//*   ).toLocaleLowerCase();
//*   if (not == "q" || "Q") {
//*     break;
//*   }
//*   toplam = toplam + not;
//*   sayac++;
//* }
//* let sonuc = toplam / sayac;
//* console.log(sonuc);

let flag = true;
let arr = [];
let sum = 0;

while (flag) {
  let input = prompt("Sayi girisi yapin").toLowerCase();
  if (input === "q") {
    alert("Basari ile cikis yaptiniz");
    flag = false;
  } else {
    if (input > 0 && input < 100) {
      arr.push(input);
    } else {
      alert("Sayi 0 ile 100 arasi olmalidir");
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  sum += parseFloat(arr[i] / arr.length);
}
console.log(sum.toFixed(2));

// const raw = arr.map((e) => {
//   sum += e;
// });
// console.log(sum);
