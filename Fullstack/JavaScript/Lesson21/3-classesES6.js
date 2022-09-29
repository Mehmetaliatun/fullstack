//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

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

//?instance
const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
console.log(book1);
console.log(book1.getAge());
console.log(book1.getSummary());

//? Sub-Class tabimlamasi (Inheritance)

class Magazine extends Book {
  //! Book'un constructor'i cagrildi.
  constructor(title, author, year, month) {
    super(title, author, year); //!parent constructor'dan (Book) aliyor.
    this.month = month; //! Burasi direkt (Magazine) constructor icinde.
  }
}

//? Magazine objesinin yeni bir instancesi
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1);

//! Soyutlama (Abstraction)
//! Kapsülleme (Encapsulation)
//! Miras Alma (Inheritance)
//! Çok Biçimlilik (Polymorphism)
