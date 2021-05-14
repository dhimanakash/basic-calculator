import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, mulNumber, divNumber } from "./action/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState1 = useSelector((state) => state.changeTheNumberMul);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Basic React redux Add/Sub app 😄</h1>
        <h3>increament/Decreament</h3>
        <div className="main-look">
          <a
            className="minus"
            title="decreament"
            onClick={() => {
              dispatch(decNumber());
            }}
          >
            <span>-</span>
          </a>
          <input
            className="input"
            type="text"
            name="quantity"
            value={myState}
          />
          <a
            className="plus"
            title="increament"
            onClick={() => {
              dispatch(incNumber(5));
            }}
          >
            <span>+</span>
          </a>
        </div>
        <h1>Basic React redux Mul / Div app 😄</h1>
        <h3>Multiplication/Dividation</h3>
        <div className="main-look">
          <a
            className="multiply"
            title="multiplication"
            onClick={() => {
              dispatch(mulNumber(5));
            }}
          >
            <span>*</span>
          </a>
          <input
            className="input"
            type="text"
            name="quantity"
            value={myState1}
          />
          <a
            className="plus"
            title="increament"
            onClick={() => {
              dispatch(divNumber(5));
            }}
          >
            <span>/</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
