import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";
const a = 5;
const App = () => {
  return (
    <>
      <h1>Hello React {a}</h1>
      <p>Merhaba</p>
      <Child />
      {/* {Child()} */} //! bu sekilde kullanmiyoruz, cunku react istemiyor.
    </>
  );
};
// console.log(element);

const Child = () => <p>I am not a baby</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
