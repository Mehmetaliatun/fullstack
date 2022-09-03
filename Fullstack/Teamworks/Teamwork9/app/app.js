const guten = [88, 77, 56, 01, 97, 23, 64];
const morgen = [11, 17, 47, 36, 44, 45, 20];

//**HER KÜMEDEN SIRAYLA ALINARAK YAZILMA HALİ */
const kartofel = [];
for (let i = 0; i < guten.length; i++) {
  kartofel.push(guten[i]);
  kartofel.push(morgen[i]);
}
console.log(kartofel);
