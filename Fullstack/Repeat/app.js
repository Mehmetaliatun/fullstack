//* vowels
// sesli harf sayan formul

// sesli harf atamak
const vowels = ["a", "e", "i", "o", "u", "ö", "ü"];

function countVowel(str) {
  // sayim basliyor
  let count = 0;

  // Sesli harf kontrolu icin dongu
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // sesli harf sayisini veriyor
  return count;
}

// input iste
const string = prompt("Enter a string: ");

// dongu icindeki sesli harf sayisi
const result = countVowel(string);

console.log(result);

//* vowels regex

// function countVowel(str) {
//   // find the count of vowels
//   const count = str.match(/[aeiou]/gi).length;

//   // return number of vowels
//   return count;
// }

// // take input
// const string = prompt("Enter a string: ");

// const result = countVowel(string);

// ;

// console.log(result);

//* diamonds

// function slope(val) {
//   document.write("function slope(" + val + ")<br>");
//   doubleit = val * 2;

//   for (i = 0; i < doubleit; i++) {
//     if (i < val) {
//       for (j = 0; j < i; j++) {
//         document.write("*");
//       }
//     }
//     if (i >= val) {
//       for (j = doubleit; j > i; j--) {
//         document.write("*");
//       }
//     }

//     document.write("<br>");
//   }
// }

// function diamond(val) {
//   doubleit = val * 2;
//   document.write("<center>");
//   document.write("function diamond(" + val + ")<br>");
//   for (i = 0; i < doubleit; i++) {
//     if (i < val) {
//       for (j = 0; j < i; j++) {
//         document.write("*");
//       }
//     }
//     if (i >= val) {
//       for (j = doubleit; j > i; j--) {
//         document.write("*");
//       }
//     }

//     document.write("<br>");
//   }

//   document.write("</center>");
// }

//*
// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++) {
//   // external loop
//   for (let j = 0; j < n; j++) {
//     // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);
