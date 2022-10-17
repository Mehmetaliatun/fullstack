import { useState } from "react";

const MouseEvent = () => {
  const [showHint, setShowHint] = useState(false);
  //!boolean degisken olusturuldu, baslangic degeri false verildi.
  //!uzerine gelince tepki verecek
  const [toggle, setToggle] = useState(false);
  //! cift click atildiginda true-false donuyor

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    //! classname ile hepsini vermek gerek classlist ile ekleme yapılır
    //!ternary ile yaptık
    toggle
      ? (e.target.className = "bg-danger text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-success text-light w-50 p-4 mt-4");
  };
  console.log(toggle);

  //! mouseMove event
  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX); //!Goreceli
    setCoordY(e.nativeEvent.offsetY);
    // setCoordX(e.pageX);
    // setCoordY(e.pageY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={() => setShowHint(true)}
        onMouseOut={() => setShowHint(false)}
      >
        todo item 1
      </div>
      {showHint && <p>Hello React</p>}
      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        todo item 3
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {coordX} - {coordY}
      </p>
    </div>
  );
};

export default MouseEvent;