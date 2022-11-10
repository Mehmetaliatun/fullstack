import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/actions/counterAction";
const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.count);
  //! ortak yapmadan onceki hali
  // const counter = useSelector((state) => state.counter);
  // const {counter} = useSelector((state) => state);
  //! ustteki gibi de kullanilabilir.
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(increment())}
          // onClick={() => dispatch(increment())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
