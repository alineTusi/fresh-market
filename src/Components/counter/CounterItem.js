import React from "react";

export const CounterItem = ({
  handleIncrease,
  handleDecrease,
  value,
  counterNumber
}) => {
  // const displayFlex = 'flex'

  return (
    <div
      style={{
        display: "flex",
        // display: displayFlex,
        alignItems: "center",
        justifyContent: "center"
      }} >

      <button onClick={() => handleDecrease(counterNumber)}>-</button>
      <p>{value}</p> 
      <button onClick={() => handleIncrease(counterNumber)}>+</button>
    </div>
  );
};
