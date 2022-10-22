import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import slide1 from "./slide1.png"
import slide2 from "./slide2.png"
import slide3 from "./slide3.png"

const BackgroundCarousel = () => {
    return (
      <Container className="bgSlides">
         <Carousel>
        <Carousel.Item>
          <img
            className="d-block "
            src={slide1}
            alt="First slide" 
          />
          <Carousel.Caption>
            <h1>FRESH MARKET <br></br>
                WE'LL DELIVER EVERYTHING<br></br>
                YOU NEED</h1>
            <button className="btnShop">SHOP ONLINE</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h1>FRESH MARKET <br></br>
                WE'LL DELIVER EVERYTHING<br></br>
                YOU NEED</h1>
            <button className="btnShop">SHOP ONLINE</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h1>FRESH MARKET <br></br>
                WE'LL DELIVER EVERYTHING<br></br>
                YOU NEED</h1>
            <button className="btnShop">SHOP ONLINE</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
  }

  export default BackgroundCarousel;