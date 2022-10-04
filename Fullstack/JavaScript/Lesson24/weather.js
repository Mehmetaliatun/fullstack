const formJS = document.querySelectorAll("form")[0];
//* JQUERY === $
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
  localStorage.setItem(
    "apiKey",
    EncryptStringAES("3e806d80c568686174a6520843cb0c11")
  );
});

// formJquery.on("submit", (e) => {
//   e.preventDefault();
//   getWeatherDataFromApi();
// });
formJquery.submit((e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  //   console.log("AJX Func. is called");
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  //* JS .value == jQUERY .val()
  const cityName = inputJQ.val();
  console.log(cityName);
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  //* XMLHttpRequest(xhr) vs. fetch() vs. axios vs $.ajax

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      //* main body func.
      console.log(response);
      const { main, sys, name, weather } = response;
      const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
      //alternative iconUrl
      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      //* js => document.createElement("li")

      //   const createdLi2=$(document.createElement("li"))
      const createdLi = $("<li></li>");
      createdLi.addClass("city");
    },
    beforeSend: (request) => {
      console.log("before ajax send");
    },
    complete: () => {
      console.log("after ajax send");
    },
    error: (XMLHttpRequest) => {
      console.log(XMLHttpRequest);
    },
  });
};
