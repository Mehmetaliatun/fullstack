import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

//! 1- Projeye baslamak icin ilk olarak api'den veri cekmemiz lazim bunun icin ilk olarak fetch, axios, useEffect
const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  //? CRUD: (GET-READ) * get isini yaptik
  const getTutorials = async () => {
    //! 3- datayi suslu icine alarak destrc. yaptik.
    //! (Cunku cektigimiz veride array "data" key'inin icinde)
    //! Havada destructure diyoruz bu isleme.
    //! API veriyi direkt data key'inin icine gonderiyor.
    try {
      const { data } = await axios(url);
      console.log(data);
      //! 2- async kullaninca await ile veriyi durdur ve fetch yerine axios kullan
      setTutorials(data);
      //! 4- setTut yapiyoruz fakat veri direkt akacagi icin useEffect icine aliyoruz. Cunku didmount yapacagiz.
    } catch (error) {
      console.log(error);
    }
    //! try ve catch ile hata yakaliyor veya atiyoruz
  };
  useEffect(() => {
    //! 5-Didmount yapmak icin return ve array icini siliyoruz.
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial />
      {/* <TutorialList {...tutorials} /> */}
      {/* 6- tutoriallist'e bu sekilde yollyoruz oradan props olarak alacagiz spread olarak ama bu karisik */}
      <TutorialList tutor={tutorials} />
      {/* 7- bu mantikli olan yontem adini tutor olarak cektik ve diger tarafta bu sekilde yollaadik orada da ayni sekilde alacagiz*/}
    </>
  );
};

export default Home;
