import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //! Js alani
  return (
    //! Jsx alani(bir nevi html alani)
    <>
      {data.map((item) => {
        console.log(item);
        const { id, language, img, btnName } = item; //! dest
        return <Card key={id} language={language} img={img} btn={btnName} />;
      })}
    </>
  );
}

export default App;
