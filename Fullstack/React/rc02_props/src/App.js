import React from "react";
import Msg from "./components/Msg";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <h1>PROPS</h1>
      <Msg name="Mehmet" age={5} />
      <Msg name="Ali" />
      <Msg name="Atun" />
      {/* {Msg({ name: "Yaren" })} */}
      <Person />
    </div>
  );
}

export default App;
