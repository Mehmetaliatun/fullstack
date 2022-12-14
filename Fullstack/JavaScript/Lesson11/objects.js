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
//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile object olusturulabilir
//* ------------------------------------------------------
//* 1-Object() class'indan new Operatoru ile
//* ------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "Bmw";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//! Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? square bracket notation

//? square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmektir
const key = "motor";
console.log(arabalar[key]);

arabalar.motor = "1.6";
console.log(arabalar.motor);

//* ------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandiracak)
//* ------------------------------------------------------

//? object constructor

function Personel(id, ad, maas) {
  this.perId = id;
  this.perAd = ad;
  this.perMaas = maas;
  //   console.log(this); //! personel objesine baglanmistir.(binded)
}

const kisi1 = new Personel("4241", "Mehmet", 15000);
const kisi2 = new Personel("4242", "Ali", 18500);
console.log(kisi1);
console.log(kisi1["perMaas"]);
console.log("Kisi bilgileri:", kisi2);

//? global alanda window objesini gosterir.
console.log(this);
//* ------------------------------------------------------
//* 3- object literal (en cok tercih edilen yontem)
//* ------------------------------------------------------

const worker = {
  name: "Ali",
  surName: "ATUN",
  age: 26,
  job: "developer",
  lang: ["c++", "java", "js", "phyton", "go"],
  salary: 140000,
};
console.log(worker);
console.log("Job:", worker.job);
console.log("lang", worker["lang"]);

console.log(worker.lang[2]);

worker["lang"].forEach((l) => console.log(l));

worker.dob = "1996";
worker.email = "maa@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] * 1.1;
console.log(worker);
//* Object Copy

const person = worker; //! shallow (sig-sığ)copying
console.log("PERSON:", person);

//!Object.create(), assign(), spread(), concat(),slice() -> shallow copy
person.dob = "2000";
console.log(person);

//! deep copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

const personel = {
  name: "ali",
  surname: "alican",
  dob: "1996",
  job: "dev",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },

  sum: function () {
    console.log(this);
    return `${this.name} is ${this.calculateAge()} years old`;
  },
  //   sum: () => {
  //     console.log(this); //? window
  //     return `${this.name} is ${this.calculateAge()} years old`;
  //   },
};

//! Limitations of using Arrow functions: Following are the certain limitations of using an arrow function:
//! An arrow function doesn’t have its own bindings with this or super.
//! An Arrow function should not be used as methods.
//! An arrow function can not be used as constructors.
//! An arrow function can not use yield within its body.
//! Arrow function cannot be suitable for call apply and bind methods.

console.log("Age:", personel.calculateAge());
console.log("Sum:", personel.sum());

//* ===================================================
//*                OBJECTS ITERATION
//* ===================================================
//? nested

const people = {
  person1: {
    name: "ali",
    surname: "alican",
    dob: "1996",
    job: "dev",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "mehmet",
    surname: "can",
    dob: "1986",
    job: "ceo",
    salary: "340000",
    drivingLicense: false,
  },
  person3: {
    name: "ahmet",
    surname: "kale",
    dob: "1990",
    job: "dev",
    salary: "180000",
    drivingLicense: true,
  },
};
console.log(people); //? {person1: {...},{person2: {...}}
console.log("Salary of p2:", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable) {
//*   // code block to be executed
//* }
console.log("************************");

for (let key of Object.keys(people)) {
  console.log(key);
}

console.log("************************");
//? people objesindeki tum salary'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.salary);
  //   console.log(v.["salary"]);
}

console.log("************************");

for (let [k, v] of Object.entries(people)) {
  console.log(`${k}-${v.salary}`);
}

//! ARRAY METOTLARI ILE
console.log("************************");
Object.keys(people).forEach((p) => console.log(p));
console.log("************************");
Object.values(people).forEach((p) => console.log(p.surname));

//! job=dev olanlarin dob degerlerini yazdir.
console.log("***********DEV*************");

Object.values(people)
  .filter((p) => p.job === "dev")
  .forEach((p) => console.log(p.dob));

//* ===================================================
//*    JSON ?> Js Object Notation
//* ===================================================

const team = [
  { name: "Josh", surname: "Scyler", job: "Dev", age: 39 },
  { name: "Mike", surname: "Roller", job: "Tester", age: 22 },
  { name: "Brendon", surname: "Kante", job: "Dev", age: 20 },
]; //*JSON

console.log(team);
console.log(team[2]);

//* Ornek 1: team dizisindeki joblari tek tek yazdir

team.forEach((item) => console.log(item.job)); //! item degisebilir.

//* Ornek 2:Age 1 arttirarak yeni bir diziye saklayiniz.

// const ages = team.map((p) => (p.age += 1));
// console.log(ages);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => {
//   return {
//     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//     age: p.age + 5,
//   };
// });
// console.log(teamFullName);

const teamFullName = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName);

//* Ornek4: age 22den kucuk esit olan kisilerin adlarini listele

team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));
// console.log(teamUnder22);

//* Ornek5: 22 yaindan kucuk ve esit olanlarin isimlerini diziye sakla

const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

//* Ornek6: yas ortalamasini hesapla

const avgAges =
  team.reduce((sum, person) => (sum += person.age), 0) / team.length;
console.log(avgAges);
