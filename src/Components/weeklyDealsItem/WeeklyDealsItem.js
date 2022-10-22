import React, { useEffect, useState } from "react";
import "./WeeklyDealsItem.css";
import "../counter/CounterItem";

const WeeklyDealsItem = ({ item }) => {
  const [value, setValue] = useState(0);
  const [discount, setDiscount] = useState(item.discount);
  const [discountValue, setDiscountValue] = useState(0);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    console.log('discount', discount, 'item.value', item.value)
    if (item.discount > 0) {
      const discountValue1 = (item.value * (1 - item.discount / 100) );
      console.log('discountValue1', discountValue1)
      setDiscountValue(discountValue1);
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
            <p className={item.discount > 0 ? 'oldValue' : 'value'}>{formatter.format(item.value)}</p>
            <pre> </pre>
                {discountValue > 0 && <p>{formatter.format(discountValue)}</p>}
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
