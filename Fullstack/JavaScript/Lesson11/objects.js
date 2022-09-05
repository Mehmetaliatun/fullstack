// const john = {
//   firstName: "Mehmet",
//   lastName: "ATUN",
//   birthYear: "1996",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   age() {
//     return new Date().getFullYear() - this.birthYear;
//   },
// };
// console.log(john) ;

// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(person);

// const personn = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// console.log(personn);

// function Peerson(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// console.log(Peerson);

// let person1 = new Person("John", "Doe");
// console.log(person1); // { firstName: 'John', lastName: 'Doe'}
// let person2 = new Person("Jane", "Doe");
// console.log(person2); // { firstName: 'Jane', lastName: 'Doe'}

// const itSchool = {
//   name: "Clarusway",
//   location: "U.S.",
//   established: "2019",
// };
// console.log(itSchool.name); // Expected Output : 'Clarusway'
// console.log(itSchool["location"]); // Expected Output : "U.S."

// sayinin basamak degerleri carpimi kac defada tek haneliye ulasir
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//* 1-gelen integer degerlerin stringe donusmesi
//* 2-dongu
//* 3-toplam degiskeni
//* 4-toplam 10dan kucuk oluncaya kadar bir dongu */

// let tekhane = (sayi) => {
//   sayi = "" + sayi;
//   sayi = sayi.split("");
//   let toplam = 1;
//   let counter = 0;
//   while (sayi.length > 1) {
//     for (let i = 0; i < sayi.length; i++) {
//       toplam *= sayi[i];
//     }
//     sayi = ("" + toplam).split("");
//     toplam = 1;
//     counter++;
//   }
//   return counter;
// };
// console.log(tekhane(999));

//* yontem2 */
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

// 2) - verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.

// input                   output
// 15     =>   (1111)  =>    4
// 14     =>   (1110)  =>    3

let binary = (sayi) => {
  sayi = sayi.toString(2);

  sayi = ("" + sayi).split("");
  let counter = 0;

  for (let item of sayi) {
    console.log("item: ", item);
    if (item == "1") {
      counter++;
    }
  }
};
console.log(binary(20));

//* yontem 2

countBits = (n) => n.toString(2).split("0").join("").length;

//! 3) fonsiyona iki adet parametre gelecek. ikinci parametre ilk gelen parametrinin rakamlarının üstü olacak ve her rakamda artacak. bu rakamların toplamı ilk gelen sayının tam katı olursa kat sayısını tam katı olmazsa -1 i return edecek.

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1  => return 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2  => return 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 => return 51

//? mulakat sorusu
//? verilen listede 1den 100e kadar rakamlar var fakat bir tanesi eksik, eksik olan sayiyi bulunuz.

let bul = (array) => {
  for (let i = 1; i < 11; i++) {
    if (i != array[i - 1]) {
      console.log(i);
      break;
    }
  }
};
bul([1, 2, 3, 4, 6, 7, 8, 9, 10]);

//* yontem 2

function findMissing(normal, missing) {
  sumNormal = (normal.length * (normal.length + 1)) / 2;
  const sumWithInitial = missing.reduce((a, b) => a + b);
  return sumNormal - sumWithInitial;
}
console.log(findMissing([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]));

//* yontem 3

let bul2 = (array) => {
  array = array.sort((a, b) => a - b);
  console.log(array);
  if (array[0] != 1) {
    return 1;
  } else {
    for (let i in array) {
      if (array[Number(i) + 1] - array[Number(i)] != 1) {
        return Number(array[i] + 1);
      }
    }
  }
};
console.log(bul2([10, 2, 3, 6, 7, 8, 9, 4]));

//* verilen dizide hangi elemanın kaç defa geçtiğini çıktı veren fonksiyon?
let count = (dizi) => {
  let ilk = [];
  let son = [];
  dizi.forEach((element) => {
    let count = 0;
    let eleman = "";
    for (let item of dizi) {
      if (element === item) {
        count++;
        eleman = item;
      }
    }
    ilk = [eleman, count];
    if (!son.length) {
      son = son.concat(ilk);
    } else {
      let counter = 0;
      for (let i = 0; i < son.length; i += 2) {
        if (son[i] !== eleman) {
          counter++;
        }
      }
      if (counter * 2 == son.length) {
        son = son.concat(ilk);
      }
    }
  });
  return son;
};
let dizi1 = ["ali", "veli", "ali", "veli", "veli", "2", 2, 2, 2];
console.log(count(dizi1));
