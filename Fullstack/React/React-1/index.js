const setTime = () => {
  //! Vanilla JS Element
  const jsElement = `
   <div>
      <h1>Javascript Element</h1>
      <p>${new Date().toLocaleTimeString()}</p>
   </div>
`;

  document.querySelector(".container-1").innerHTML = jsElement;

  //! React Element without JSX
  const reactElement = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "React"),
    React.createElement("p", null, new Date().toLocaleTimeString())
  );
  ReactDOM.render(reactElement, document.querySelector(".container-2"));
};

setInterval(setTime, 1000);

//! "Gerçek DOM’a karşılık gelen sanal bir DOM nesnesidir, yani render edilen DOM’un bir kopyasıdır. React her state değişikliğinde render edilen gerçek DOM’u bütünüyle tekrar oluşturmak yerine, state değişikliğini Virtual DOM’a yansıtmaktadır."

//! CLASS ORNEGI

//! closure nedir interview sorusu

// class Book {
//   //? static property
//   static counter = 0;

//   //! private property
//   #id;

//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     //? Static degiskenin degeri bir arttirliyor.
//     Book.counter++; //? Classname.propertyName

//     //! private prorety  deger atanmasi
//     this.#id = "123456";
//   }
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${
//       this.year
//     } so it is age ${this.#computeAge()} `;
//   }
//   //? static method
//   static compareAge(b1, b2) {
//     return `Books age diffrence: ${b1.year - b2.year}`;
//   }

//   //! private id'yi okumak icin getter metodu
//   getId() {
//     return this.#id;
//   }
//   //! private id'yi degisttiren setter metodu
//   setId(id) {
//     this.#id = id;
//   }

//   //! Private metot
//   #computeAge() {
//     return new Date().getFullYear() - this.year;
//   }
// }

// //? instance
// const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
// const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);
// const book3 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);

// //? STATIC
// console.log(Book.counter); //! 3
// console.log(book1.counter); //! undefined
// console.log(Book.compareAge(book1, book3));

// //! PRIVATE

// //! private degisklenlere class disindan dogurudan erisilemez
// // console.log(book1.#id);
// // book1.#id = '4321';

// console.log(book1.getId());
// book1.setId("43210");
// console.log(book1.getId());

// //! Private metotlar class disraisindan cagirlamazlar.
// //! Sadece class icerisindeki metotlar taradindan  cagirlabilirler
// // console.log(book1.#computeAge());

// console.log(book1.getSummary());
