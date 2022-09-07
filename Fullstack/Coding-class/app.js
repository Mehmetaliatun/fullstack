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

//* --------------------------------------------------------
//*                   07/09/2022
//* --------------------------------------------------------

//! Q-1
/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

//? Solution -1

function dontGiveMeFives(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) {
      count++;
    }
  }
  return count;
}

//? Solution-2

function dontGiveMeFives(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (i.toString().search(5) === -1) {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFives(1, 9));
console.log(dontGiveMeFives(4, 17));

//! Q-2
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

//? Solution

function descendingOrder(n) {
  return (
    String +
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));

//! Q-3
/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/
//? Solution

function evenLast(numbers) {
  return numbers.length
    ? numbers.reduce((x, y, z) => x + (z % 2 === 0 ? y : 0), 0) *
        numbers[numbers.length - 1]
    : 0;
}
console.log(evenLast([1, 2, 3, 4, 5]));

//? Solution-2

function evenLast(numbers) {
  if (!numbers[0]) return 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    count += numbers[i];
  }
  return count * numbers[numbers.length - 1];
}
console.log(evenLast([]));

//! Q-4
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3,3])       == [1,2,3]
*/

//! Q-5
/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/
