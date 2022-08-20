//? Guess Game

//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

//* Psuedo Code

//* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)

let guess;
let cont;
do {
  let hak = 5;
  const random = Math.round(Math.random() * 100);
  console.log(random);
  do {
    guess = Number(prompt("Guess random number between 0-100:"));
    hak -= 1;
    if (guess === random) {
      console.log(`Congratulations, you knew about the ${5 - hak}. one.`);
      break;
    } else if (guess < random) {
      console.log("Increase your guess ⬆");
    } else {
      console.log("Decrease your guess ⬇");
    }
  } while (hak > 0);

  if (guess !== random) {
    console.log("Hahah Looser!");
  }
  cont = prompt("If you want to play again press `y` ");
} while (cont === "y" || cont === "Y");
