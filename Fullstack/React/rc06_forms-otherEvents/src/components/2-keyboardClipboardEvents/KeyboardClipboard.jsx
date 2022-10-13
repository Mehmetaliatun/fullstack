import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState();
  //!state girerken import atmayi unutma
  // console.log(inputValue);
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      //! ascii kodu ile rakam girilmesini engelliyoruz.
      alert("You can't enter a number");
      e.preventDefault();
      //! preventD ile girmesini engelliyoruz
    }
    e.keyCode === 13 && setInputValue("");
    //! bu degeri vererek enter'a basinca set input siliniyor
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value += e.clipboardData.getData("text").toLocaleUpperCase();
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue} //! bu degeri vererek enter'a basinca input siliniyor
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();

          //! target'in degerini oku yakala ve tekrar buyuk harf olarak gonder
          setInputValue(e.target.value);
        }}
        //! inputta olan degeri oku ve p etiketine aktar
        onKeyDown={handleKeyDown}
        //! basildiginde keydown, cekildiginde keyUp
      />
      <p
        onCopy={(e) => {
          e.preventDefault();
          alert("You can't cop this doc");
        }}
        className="text-start mt-4  "
      >
        {inputValue}
      </p>
      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
