import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import WeeklyDealsItem from "../../Components/weeklyDealsItem/WeeklyDealsItem";
import "./Shop.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    fetch(`http://localhost:3001/items/`)
      .then((response) => response.json())
      .then((json) => {
        console.log("JSON RESULT", json);
        setItems(json);
        setAllItems([...json]);
      });
  }, []);

  const filter = (filterBy) => {
    if (filterBy) {
      setItems([...allItems].filter((x) => x.category === filterBy));
    } else {
      setItems(allItems);
    }
  };

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
              <div className="shopUlCollectionContainer">
                <Accordion defaultActiveKey="0" alwaysOpen={true} flush={true}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header bsPrefix="shopAccordion">
                      Collection
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="shopUlCollection">
                        <NavLink className="shopCollectionList">
                          <button className="shopCollectionListBtn" onClick={() => filter()}>All</button>
                        </NavLink>
                        <NavLink className="shopCollectionList">
                          <button className="shopCollectionListBtn" onClick={() => filter("produce")}>
                            Produce
                          </button>
                        </NavLink>
                        <NavLink className="shopCollectionList">
                          <button className="shopCollectionListBtn" onClick={() => filter("dairy & eggs")}>
                            Dairy & Eggs
                          </button>
                        </NavLink>
                        <NavLink className="shopCollectionList">
                          <button className="shopCollectionListBtn" onClick={() => filter("bread & grains")}>
                            Bread & Grains
                          </button>
                        </NavLink>
                        <NavLink className="shopCollectionList">
                          <button className="shopCollectionListBtn" onClick={() => filter("household")}>
                            Household Goods
                          </button>
                        </NavLink>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                      <button className="shopPriceBtn"></button>
                      <div>
                        <Form.Range />
                        <span>$9.99</span>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="shopSortBy">
            <div className="shopSortByDropDown">
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Sort by"
                className="shopDropdownControl"
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
