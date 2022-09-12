console.log("**** app.js *******");

//? Selectors
const langInput = document.querySelector(".langInput");
const addBtn = document.querySelector("#addBtn");
const deletebtn = document.querySelector("#deletebtn");
const langList = document.getElementById("langList");

const newUl = document.createElement("ul");
langList.appendChild(newUl);
