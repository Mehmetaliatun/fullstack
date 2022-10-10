import "./Buton.css";

const Buton = ({ btn }) => {
  console.log(btn);
  return (
    <div>
      <button className="btn-blue">{btn}</button>
    </div>
  );
};

export default Buton;
