//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;

    //? Bu alanda yazilan bir metot butun instance'lerin belleginde tek tek yer kaplar.
    this.getTitle = function () {
      return this.title;
    };
  }

  //!Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
  getAge() {
    return new Date().getFullYear() - this.year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}
//? Sub-Class tabimlamasi (Inheritance)
class Magazine extends Book {
  //! Book'un constructor'i cagrildi.
  constructor(title, author, year, month) {
    super(title, author, year); //!parent constructor'dan (Book) aliyor.
    this.month = month; //! Burasi direkt (Magazine) constructor icinde.
  }
  //!Overrided metot (parent class'taki bir metodun farkli
  //! fonksiyonellikle fakat ayni isimle tanimlanmasi)
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} in ${this.month}`;
  }
}

//? Magazine objesinin yeni bir instancesi
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "September");
console.log(mag1.getSummary());
