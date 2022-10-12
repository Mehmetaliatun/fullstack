// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let message = "Event Based Program";

  const handleClick = () => {
    alert("Button clicked");
  };

  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (e) => {
    console.log(e.target);

    message = "REACT";

    console.log(message);
  };

  return (
    <div className="container text-center mt-4">
      <h1>{message}</h1>
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button>
      <button
        className="btn btn-dark"
        onClick={() => handleClear("Clear buton clicked")}
      >
        Clear
      </button>
      <button onClick={handleChange} className="btn btn-danger">
        Change
      </button>
      {/* <button onClick={(e)=>handleChange(e)} className="btn btn-danger">
        Change
      </button> */}
    </div>
  );
};

export default Events;
