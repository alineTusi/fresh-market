import React from "react";
import shoppingBag from "./shoppingBag.png";
import deliveryTruck from "./deliveryTruck.png";
import mask from "./mask.png";
import "./Delivery.css";
import Container from 'react-bootstrap/Container'

const Delivery = () =>{
  return(
    <Container>
    <div className="deliveryContainer">
      <div className="infoDelivery">
        <img src={shoppingBag} alt="bag icon"></img>
        <h3>Pick Up Options</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
      <div className="infoDelivery">
        <img src={deliveryTruck} alt="truck icon"></img>
        <h3>Same Day Delivery</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
      <div className="infoDelivery">
        <img src={mask} alt="mask icon"></img>
        <h3>Health & Safety Rules</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>

    </div>
    </Container>
  )
}
export default Delivery;