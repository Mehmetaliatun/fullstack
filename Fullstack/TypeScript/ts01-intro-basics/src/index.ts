export {};
console.log("Hello TypeScript!");
// let a = 5;
let a = 6;
let b = "Danke";
console.log(a);

let arr: any[] = ["john", 619, true];
console.log(arr);

let myVar: any = "maa";
myVar = 66;
console.log(myVar);

let numbers: number[] = [];
// numbers.push("3");

let v1: unknown = 3;
let v2: number = v1 as number;
console.log(v1, v2);

let firstName = "enver";
let lastName = "pasa";
function getFullName(): void {
  return; // firstName + " " + lastName;
}
// console.log(getFullName().toLocaleUpperCase());
