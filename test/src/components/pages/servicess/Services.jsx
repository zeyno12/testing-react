import React, { useState } from "react";
const Services = () => {
  const [temperatureValue, setTempratureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const increaseTemprature = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
    setTempratureValue(newTemperature);
  };
  const deccreaseTemprature = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
    setTempratureValue(newTemperature);
  };
  return (
    <>
      <div className="appcontainer">
        <div className="temperaturedisplaycontainer">
          <div className={`temperaturedisplay ${temperatureColor}`}>
            {temperatureValue}°C
          </div>
        </div>
        <div className="buttoncontainer">
          <button onClick={() => increaseTemprature()}>+</button>
          <button onClick={() => deccreaseTemprature()}>-</button>
        </div>
      </div>
    </>
  );
};
export default Services;
