import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import WeeklyDealsItem from "../../Components/weeklyDealsItem/WeeklyDealsItem";
import "./Shop.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Form from "react-bootstrap/Form";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    fetch(`http://localhost:3001/items/`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const options = [
    "Sort by",
    "Newest",
    "Price (low to high)",
    "Price (high to low)",
    "Name A-Z",
    "Name Z-A",
  ];
  const defaultOption = options[0];

  return (
    <Container>
      <div className="shopContainer">
        <h3 className="shopTitle">Shop</h3>
        <p className="shopParagraph">
          I'm a paragraph. Click here to add your own text and edit me.
        </p>
        <div className="shopContainerItems">
          <div>
            <h3 className="shopFilterTitle">Filter by</h3>
            <div className="shopCollectionContainer">
              <button className="shopCollectionBtn">Collection</button>

              <div className="shopUlCollectionContainer">
                <ul className="shopUlCollection">
                  <NavLink className="shopCollectionList">All</NavLink>
                  <NavLink className="shopCollectionList">Produce</NavLink>
                  <NavLink className="shopCollectionList">Dairy & Eggs</NavLink>
                  <NavLink className="shopCollectionList">
                    Bread & Grains
                  </NavLink>
                  <NavLink className="shopCollectionList">
                    Household Goods
                  </NavLink>
                </ul>
              </div>

              <button className="shopPriceBtn">Price</button>
              <div>
                <Form.Range />
              </div>
            </div>
          </div>
          <div className="shopSortBy">
            <div className="shopSortByDropDown">
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Sort by"
                className=""
              />
            </div>

            <div className="shopweeklyDealsItems">
              {items.map((item) => (
                <WeeklyDealsItem item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Shop;
