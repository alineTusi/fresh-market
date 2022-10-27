import React from "react";
import Container from "react-bootstrap/Container";
import "./About.css";

const About = () => {
  return (
    <Container>
      <div className="aboutContainer">
        <h3 className="aboutTitle">About our Market</h3>
        <img
          className="aboutImg"
          src="https://static.wixstatic.com/media/ad420a_669665f5ac454bf29853afbc02b635df~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1128054012.jpg"
          width="700px"
        ></img>
        <p className="aboutParagraph">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
          <br></br>
          <br></br>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
      </div>
    </Container>
  );
};
export default About;
