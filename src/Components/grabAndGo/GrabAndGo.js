import React, { useEffect, useState } from "react";
import WeeklyDealsItem from "../weeklyDealsItem/WeeklyDealsItem";
import "./GrabAndGo.css";
import Container from 'react-bootstrap/Container'

const Grab = () => {
  const [items, setItems] = useState([{}, {}]);
  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    fetch(`http://localhost:3001/items/`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <Container>
    <div className="grabContainer">
          <h2 className="title">Grab 'N Go</h2>
          <p>I'm a paragraph. Click here to add your own text and edit me.</p>

          <div class="rowContainer">
            {items.map((item, index) => (
              <div className="grabItem">
                <WeeklyDealsItem item={item} />
              </div>
            ))}
          </div>
    </div>
    </Container>
  );
  
};

export default Grab;
