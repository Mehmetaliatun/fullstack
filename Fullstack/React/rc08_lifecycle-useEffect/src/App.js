import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";

function App() {
  const [show, setShow] = useState(true);
  //! ctrl+space ile import edebiliriz.
  // console.log(show);
  return (
    <div className="container text-center mt-4">
      <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {/* //! short circuit kullanildi kisaca. */}
      {show && <LifeCycleMethods />}
    </div>
  );
}

export default App;
