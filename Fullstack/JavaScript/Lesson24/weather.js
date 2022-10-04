const formJS = document.querySelectorAll("form")[0];
// const formJquery = jQuery("form").eq(0);
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);

// console.log(formJS);
// console.log(formJquery);
console.log(inputJQ);

//* get(index)=> toArray(get()), eq(index)

//* load vs DOMContentLoaded
//* DOMContentLoaded ===> means page rendered, DOM is ready
//* window load ==> (all content (e.g. images, styles etc.) also loaded)
//* window.onload = () => {} ===> JS
//* addEventListener ===> on

//* window.onload=()=>{}
//* addEventListener ===> on

$(window).on("load", () => {
  console.log("window.load");
});

//* document.addEventListener("DOMContentLoaded", ()=>{})
// $(document).on("DOMContentLoaded", () => {
//   console.log("DOMContentLoaded");
// });
$(document).ready(() => {
  console.log("DOMContentLoaded");
});

// formJquery.on("submit", (e) => {
//   e.preventDefault();
//   getWeatherDataFromApi();
// });
formJquery.submit((e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  console.log("AJX Func. is called");
};

//* XMLHTTPREQUEST(xhr) vs. fetch() vs. axios vs $.ajax
