import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faComment,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee, faComment);



const Footer = () => {
  return (
    <Container className="footerBg">
      <div className="footerContainer">
        <div className="infoFooter">
          <p>STORE</p>
          <a href="#">Shop All</a>
          <br></br>
          <a href="#">Shipping & Returns </a>
          <br></br>
          <a href="#">Store Policy</a>
          <br></br>
          <a href="#">FAQ</a>
        </div>
        <div className="infoFooter">
          <p>ADDRESS</p>
          <p>
            500 Terry Francois Street <br></br>San Francisco, CA 94158
          </p>
        </div>
        <div className="infoFooter">
          <p>OPENING HOURS</p>
          <p>Mon - Fri: 7am - 10pm Saturday: 8am - 10pm Sunday: 8am - 11pm</p>
        </div>
        <div className="infoFooter">
          <p>GET IT FRESH</p>
          <p>Email *</p>
          <input type="email" required="required"></input>
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
      <div className="socialMedia">
        <p>© 2023 by Fresh Market. Proudly created with Wix.com</p>
        <div className="icon">
          <a>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
