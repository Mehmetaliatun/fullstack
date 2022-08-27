let metin = "Mehmet Ali ATUN";
console.log(`Orijinal Hali => ${metin}`);

let metin_split = metin.split("").reverse().join("");

console.log(metin_split);

//* */

let malzemeler = "Welcome to Clarusway, enjor yourself!";

console.log(malzemeler.split(" ").reverse().join(" "));

//* */

let fruit = ["apple", "peach", "cherry"];

fruit[fruit.length] = "orange";

console.log(fruit);

fruit.push("banana");

//! unshift basina ekliyor - push direkt sonuna ekliyor. */

console.log(fruit);
