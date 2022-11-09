import React, { useRef } from "react";

const UseRefComp = () => {
  const divRef = useRef();
  const handleRef = () => {
    console.log(divRef.current);
    console.log(divRef.current.firstElementChild.innerText);
    console.log(divRef.current.lastElementChild.innerText);
  };
  return (
    <div>
      <div ref={divRef}>
        <p>First Element Child</p>
        <p>Last Element Child</p>
      </div>
      <button onClick={handleRef}>useRef Click</button>
    </div>
  );
};

export default UseRefComp;
