import React, { useEffect, useState } from "react";

//! useState kullanildiginda surekli mounting oldugu icin render atiyor
//! Bu yuzden sonsuz donguye giriyor.
//? Cozum olarak buton ile fonk olusturulup tek tek veri alinabilir.
//* Ya da foksiyon yazilarak getUser() acildiginda veri alir.
//! Ya da useEffect ile cekeriz.

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    //? componentDidMount
    getUser();
  }, []);

  console.log(user);
  const { name, dob, email, picture } = user;
  return (
    <div>
      <h1>
        {/* Optional Chaining */}
        {/* name?.first?.second */}
        {name?.first} {name?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>{email}</p>
      {/* <h5>{dob?.date}</h5> */}
      <h5>{new Date(dob?.date).toLocaleDateString("en-US")}</h5>
      <button className="btn btn-danger" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
