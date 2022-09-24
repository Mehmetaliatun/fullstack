//*=================================================
//*              ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

//! Callback
//! Micro
//! Makro

const getNews = async function () {
  const API_KEY = "a0d2399e111b4b138fbf4cbe9d5c4be5";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }

  //   console.log(res);
};
const renderNews = (news) => {
  const newsList = document.getElementById("news-list");
  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //!dest.
    newsList.innerHTML += `
    
        <div class="card" style="width: 18rem;">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" class="btn btn-primary">Details</a>
        </div>
    </div>
    
    `;
  });
};
window.addEventListener("load", getNews);
