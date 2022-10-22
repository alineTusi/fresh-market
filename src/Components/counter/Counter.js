import React, { useState } from "react";
import { CounterItem } from "./CounterItem";

const Counter = () => {
  const [counters, setCounters] = useState([
    { counterNumber: 1, value: 0 },
    { counterNumber: 2, value: 0 },
    { counterNumber: 3, value: 0 }
  ]);

  const handleIncrease = (counterNumber) => {
    // console.log(counters);
    setCounters(
      counters.map((counter) => {
        // spread array { ...counter, value: changes }
        return counter.counterNumber === counterNumber
          ? {
              ...counter,
              value: counter.value + 1
            }
          : counter;
      })
    );
  };

  const handleDecrease = (counterNumber) => {
    // console.log(counters);
    setCounters(
      counters.map((counter) => {
        // spread array { ...counter, value: changes }
        return counter.counterNumber === counterNumber
          ? {
              ...counter,
              value: counter.value - 1
            }
          : counter;
      })
    );
  };

//   const handleIncreaseAll = (counterNumber) => {
//     // console.log(counters);
//     setCounters(
//       counters.map((counter) => {
//         // spread array { ...counter, value: changes }
//         return {
//           ...counter,
//           value: counter.value + 1
//         };
//       })
//     );
//   };

//   const handleDecreaseAll = (counterNumber) => {
//     // console.log(counters);
//     setCounters(
//       counters.map((counter) => {
//         // spread array { ...counter, value: changes }
//         return {
//           ...counter,
//           value: counter.value - 1
//         };
//       })
//     );
//   };

//   const handleClearAll = () => {
//     // console.log(counters);
//     setCounters(
//       counters.map((counter) => {
//         // spread array { ...counter, value: changes }
//         return {
//           ...counter,
//           value: 0
//         };
//       })
//     );
//   };

  return (
    <div>
      {counters.map((counter) => {
        // counters.map((counter, index) => {
        // console.log(counters);
        return (
          <CounterItem
            // key={index}
            key={counter.counterNumber}
            value={counter.value}
            counterNumber={counter.counterNumber}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            // handleIncreaseAll={handleIncreaseAll}
            // handleDecreaseAll={handleDecreaseAll}
          />
        );
      })}
{/* 
      <button onClick={handleIncreaseAll}>Increase all</button>
      <button onClick={handleDecreaseAll}>Decrease all</button>
      <button onClick={handleClearAll}>Clear all</button> */}
    </div>
  );
};

export default Counter;