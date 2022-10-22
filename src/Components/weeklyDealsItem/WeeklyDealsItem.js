import React, { useEffect, useState } from "react";
import "./WeeklyDealsItem.css";
import "../counter/CounterItem";

const WeeklyDealsItem = ({ item }) => {
  const [value, setValue] = useState(0);
  const [discount, setDiscount] = useState(item.discount || 0);
  const [discountValue, setDiscountValue] = useState(0);

  useEffect(() => {
    console.log('discount', discount)
    console.log('item.value', item.value)
    if (item.discount > 0) {
      setDiscountValue((item.value * discount ));
      // setDiscountValue(item.value - discount);
    }
  }, [discount]);

  const handleDecrease = (v) => {
    setValue(v - 1);
  };

  const handleIncrease = (v) => {
    setValue(v + 1);
  };
  const handleDiscount = () => {};
  return (
    // <div className="weeklyDeals">
      // <div className="items">
        <div className="item">
          <div className="imgContainer">
            {discountValue > 0 &&  <span className="sale">Special Price</span>}
            <img src={item.imageUrl} width="100%" alt="item"></img>
          </div>
          <p className="itemName">{item.name}</p>
          <div className="valueContainer">
            <p>{item.value}</p>
                {discountValue > 0 && <p>{discountValue}</p>}
          </div>
          <div className="fields">
            <button className="btnItem" onClick={() => handleDecrease(value)}>
              -
            </button>
            <input className="inputField" type="text" value={value} />
            <button className="btnItem" onClick={() => handleIncrease(value)}>
              +
            </button>
          </div>
          <button className="btnCart">Add to Cart</button>
        </div>
      // </div>
    // </div>
  );
};

export default WeeklyDealsItem;
