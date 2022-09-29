//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "The Kramazov Brothers",
  author: "Dostoevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }, //! arrow kullanilmiyor cunku this yok ve dogru yer gostermiyor.
};

console.log(book1);
console.log(book1.getSummary());
console.log(book1.hasOwnProperty("author")); //? true
//! object nesnesinden miras yoluyla geldi.
console.log(new Date());

const book2 = {
  title: "The Lily of the valley",
  author: "Honore de Balzac",
  year: 1888,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2);
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//?Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir.
//? (DRY-Don't repaet Yourself)
//? Cozum: Object Oriented Programming (ES5 amd ES6)
