import React, { useState } from "react";
import "./index.css";

function App()  {
  // თუ ტემპერატურა 0ზე ნაკლებია, temperature დივის ბეგქრაუნდ ფერი იყოს ლურჯი, თუ მეტია 0ზე და ნაკლებია 15ზე იყოს მწვანე, 15დან 30მდე იყოს ყვითელი, ხოლო 30ის ზევით იყოს წითელი
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [tempColor, setTempColor] = useState("")

  const handleIncrement = () => {
    setTemperatureValue(temperatureValue + 1)
    asld()
  }

  const handleDecrement = () => {
    setTemperatureValue(temperatureValue - 1)
    asld()
  }

  const asld = () => {
    if(temperatureValue <= 0) {
      setTempColor("blue")
    } else if(temperatureValue > 0 && temperatureValue < 15) {
      setTempColor("green")
    } else if(temperatureValue >= 15 && temperatureValue < 30) {
      setTempColor("orange")
    } else if(temperatureValue >= 30) {
      setTempColor("red")
    }
  }
  

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temperatureValue}⁰C</div>
      </div>
      <div className="button-container">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
export default App;
