// import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position = [51.505, -0.09];
  return (
    <Container>
      <div className="contactContainer">
        <div className="contactUs">
          <h3 className="contactUsH3">Contact Us</h3>
          <p className="contactUsParagraph">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page.
          </p>
        </div>

        <div className="contactInfo">
          <div className="infoFooter">
            <p>CONTACT</p>
            <p>
              Tel: 123-456-7890<br></br>Email: info@mysite.com
            </p>
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
        </div>

        <form>
          <div className="contactForm">

            <div className="contactInput">
              <label>First Name *</label>
              <input  className="contactInput" type="text" name="firstName" required />
            </div>
            <div className="contactInput">
              <label>Email *</label>
              <input  className="contactInput" type="email" name="email" required />
            </div>
            <div className="contactInput">
              <label>Last Name *</label>
              <input  className="contactInput" type="text" name="lastName" required />
            </div>
            <div className="contactInput">
              <label>Subject</label>
              <input className="contactInput" type="text" name="subject" />
            </div>

            <div className="contactMessage">
              <label>
                Type your message here... *
                <textarea
                  placeholder="Type your message here..."
                  name="message"
                  rows="10"
                  cols="80"
                ></textarea>
              </label>
              <button>Submit</button>
            </div>
          </div>
        </form>
        <MapContainer
          style={{
            height: "400px",
            width: "70%",
            margin: "auto",
            marginTop: "10em",
            marginBottom: "4em",
          }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Container>
  );
};
export default Contact;
