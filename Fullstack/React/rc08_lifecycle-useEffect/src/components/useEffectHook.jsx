//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//!depandency array yoksa mount + update gibi calisir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //? componentDidMount
  //!fetch, asyn, await, localStorage, setTimeout, setInterval();
  //   useEffect(() => {
  //     console.log("mounting");
  //     setTimeout(() => {
  //       alert("Data fetched");
  //     }, 3000);
  //   }, []);

  //? componentDidMount + componentDidUpdate

  //   useEffect(() => {
  //     console.log("mounting+updating");
  //     setTimeout(() => {
  //       alert("Data fetched");
  //     }, 1000);
  //   }, [count]);

  //! array bos ise veya yok ise mount+update yapar.
  //!sayfada herhangi bir guncelleme oldugunda calisir.

  //? componentDidUnmount
  const fetchData = () => {
    console.log("Data fetched");
  };
  useEffect(() => {
    //! componentDidMount
    const timerId = setInterval(fetchData, 1000);
    console.log("mounting");
    return () => {
      //!componentWillUnmount
      clearInterval(timerId);
      console.log("unmounting");
    };
  }, []);

  console.log("rendering");
  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
