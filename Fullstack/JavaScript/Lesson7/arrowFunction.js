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

const r = Number(prompt("yaricap giriniz:"));
const h = Number(prompt("yukseklik giriniz:"));

const hacimHesapla = (r, h) => Math.PI * r * r * h;
// console.log(`${r},${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
console.log(`${r},${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
