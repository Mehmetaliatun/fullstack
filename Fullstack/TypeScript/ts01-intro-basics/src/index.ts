export {};
// console.log("Hello TypeScript!");
// // let a = 5;
// let a = 6;
// let b = "Danke";
// console.log(a);

// let arr: any[] = ["john", 619, true];
// console.log(arr);

// let myVar: any = "maa";
// myVar = 66;
// console.log(myVar);

// let numbers: number[] = [];
// // numbers.push("3");

// let v1: unknown = 3;
// let v2: number = v1 as number;
// console.log(v1, v2);

// let firstName = "enver";
// let lastName = "pasa";
// function getFullName(): void {
//   return; // firstName + " " + lastName;
// }
// console.log(getFullName().toLocaleUpperCase());

// let num = 4.325;
// function RoundUp(n: string | number): string {
//   if (typeof n === "number") {
//     return n.toFixed(2);
//   } else {
//     return parseFloat(n).toFixed(2);
//   }
// }
// console.log(RoundUp("6.825"));

// function greet(message: string, name: string): string {
//   return message + " " + name + "!";
// }

// const g1 = greet("Welcome", "Mr.Atun");
// console.log(g1);

// type Control = "user" | "admin" | "moderator";

// let c = "moderator";

// let d: any = 5;

// interface Person {
//   firsName: string;
//   lastName: string;
//   age?: number;
// }
//* optional hal almasi icin "?" koyuyoruz ve bu sayede veri gonderebiliriz.

// let people: Person[] = [];

// people.push({ firsName: "Mehmet", lastName: "Atun", age: 26 });
//!olmasi gereken ust satir gibi fakat optional ile alttaki gibi hata vermez.
// people.push({ firsName: "Mehmet", lastName: "Atun" });

interface Person {
  firstName: string;
  lastName: string;
  citizenId: number;
}

interface Employee {
  id: number;
  salary: number;
  department: string;
}

class CwInstructor implements Person, Employee {
  citizenId = 12345632141;
  constructor(
    public firstName: string,
    public lastName: string,
    public id: number,
    public salary: number,
    public department: string
  ) {}
}

let atun = new CwInstructor("Mehmet", "Atun", 4241, 13.0, "Frontend");
console.log(atun);

function calisanBilgisi(calisan: Employee) {
  console.log(
    "calisan adi: " + calisan.firstName + " " + calisan.lastName,
    "calisan bolumu: " + calisan.department
  );
}
calisanBilgisi(atun);
