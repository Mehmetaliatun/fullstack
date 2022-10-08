import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    <div>
      {/* <h1>PROPS</h1>
      <Msg name="Mehmet" age={5} />
      <Msg name="Ali" />
      <Msg name="Atun" /> */}
      {/* {Msg({ name: "Yaren" })} */}
      {/* <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
      <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
      <Person name={data[2].name} img={data[2].img} tel={data[2].tel} /> */}
      {/* suslu parantez olursa return yazmak gerekir. */}
      {data.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          img={person.img}
          tel={person.tel}
        />
      ))}
    </div>
  );
}

export default App;
