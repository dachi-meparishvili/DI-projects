import { useState } from "react";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./redux/CounterAction";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>
        <button className="increment" onClick={() => dispatch(Increment())}>
          increment
        </button>
        <span>{counter}</span>
        <button className="decrement" onClick={() => dispatch(Decrement())}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
