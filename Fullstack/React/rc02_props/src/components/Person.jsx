import Msg from "./Msg";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div style={{ textAlign: "center" }}>
      {/* <p>Merhaba {name}</p> */}
      <Msg name={name} />
      <img style={{ width: "300px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
