import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./Contact.css";

const Contact = () => {
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

        <div className="contactForm">
          <form>
            <label>
              First Name *
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name *
              <input type="text" name="lastName" required />
            </label>
            <label>
              Email *
              <input type="email" name="email" required />
            </label>
            <label>
              Subject
              <input type="text" name="subject" />
            </label>
            <label>
              Type your message here... *
              <textarea
                placeholder="Type your message here..."
                name="message"
                rows="10"
                cols="100"
              ></textarea>
            </label>
          </form>
        </div>

        <input type="submit" value="Submit" />

        <div className="contactMapContainer"></div>
      </div>
    </Container>
  );
};
export default Contact;
