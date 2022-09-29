//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor
function Book(title, author, year) {
  //! object constructor old. icin ilk harf buyuk.(zorunlu degil anlasilirlik icin)
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getSummary = function () {
  //     return `${this.title} was written by ${this.author} in ${this.year}`;
  //   };
}

//? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
//? her bir instance'da hayat bulmus olur.

//?instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
//?instance
const book2 = new Book("Sinekli Bakkal", "Halide Edip Adivar", 1930);

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.

//!prototype'taki fonksiyon ortak kullaniliyor. Her birine yeniden tanimlanmiyor. Boylece bellek verimli kullaniliyor.

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.price = 100;
// book1.price = 100;

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.
//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

console.log(Book.prototype);
console.log(book1.__proto__); //!instance prototype bu sekilde bakiliyor.

console.log(book1);
console.log(book1.getSummary());
console.log(book2);
console.log(book1, book2);

Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};
console.log(book1, book2);
console.log(book1.getAge());
console.log(book2.getAge());

//? INHERITANCE (Kalitim -ES5)
//?----------------------------------------------------------------

//? Sub-Class

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year); //!Cagriliyor fakat yeni bir obje
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
//? Magazine objesinin yeni bir instancesi
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1);

console.log(mag1.getSummary());
