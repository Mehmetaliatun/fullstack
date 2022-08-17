// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

// var sum = 0;
// for (var i = 3; i < 7; i++) {
// sum += i;
// if (i ===3 || sum > 10) {
// continue;
// }
// console.log(i);
// }


// var players = ["Messi", "Ronaldo", "Hazard", "Neymar", "Salah"];
// var text = "";
// var i;  
// for (i = 2; i < players.length; i++) {
// text += players[i];
// }
// document.write(text);

// var i = 0;
// var sum=0;
// while (i < 3) {
// var sum = sum + i; i++;
// }
// console.log ("The total is: " + sum);

// for (let i=1; i<=10; i++){
//     console.log(`${i}-Merhaba`);
// }

//? const n=Number(prompt("Enter a number:"))

//? let toplam = 0 
//? for(let i = 1; i <= n; i++){
//?     toplam += i;
//? }
//? console.log("SONUC", toplam);

//? let n = +prompt("Enter a number:");
//? let sum = 0;
//? for ( let i = 1 ; i <= n ; i++){
//?     sum += i;
//? }
//? console.log(sum);

//* EXP- 0-100 arasinda 10 adet tam rastgele sayi ureten kodu for dongusu 
//* ile yaziniz

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>en yakin ust tam sayiya sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//* for(let i=1; i<=10; i++){
//*    const random =Math.round(Math.random() *100);
//*     console.log(random);
//* }

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//? kullanıcıdan alınan sayıyı bir eksiğine kadar böl  eğer işlemlerden birinde sonuç 0 olursa asal false olur ve sayı asal değildir sonucunu çıkarır

//* const number = Number(prompt("Enter a positive number:"));
//* let asal = true;

//* if (number <=0 ) {
//* alert("The number should bigger than 0.");
//* }else {
//* for(let i=2 ; i<number ; i++){
//* if(number % i === 0){
//* asal = false;
//* break;
//* }
//* }
//* const result = asal === true ? "Asaldir" : "Asal değildir"
//* console.log(`${number} ${result}`);
//* }

