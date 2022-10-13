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
      <p className="text-start mt-4  ">{inputValue.toLocaleUpperCase()}</p>
      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
