import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import "./foot.css";

import circle1 from "../../assets/Circles/Circle_Green.svg";
import zig from "../../assets/ZigZags/Line_Orng2.svg";

// import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";

import twillio from "../../assets/SponsorLogos/Twillio/twillioRed.png";
import google from "../../assets/SponsorLogos/Google/google.png";
import giphy from "../../assets/SponsorLogos/Giphy/giphyIcon.png";
import liberty from "../../assets/SponsorLogos/Liberty/libertyLogo.png";

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2vw;
  color: #ffffff;
  display: flex;
  margin-bottom: 5%;
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Logo = {
  maxHeight: "8vh",
  maxWidth: "100%",
  objectFit: "contain",
  marginTop: "4vh"
};

const Liber = {
  height: "17vh",
  maxWidth: "100%"
};

const centerTable = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};

const Cir = styled.img`
  float: left;
  margin-left: 20%;

  @media (max-width: 500px) {
    margin-left: -10%;
    height: 50px;
  }
`;

const Zag = styled.img`
  float: right;
  margin-right: 15%;
  margin-top: 5%;

  @media (max-width: 500px) {
    margin-right: 5%;
    margin-top: -10%;
    height: 50px;
  }
`;

export class Footer extends Component {
  render() {
    return (
      <div style={{ paddingTop: "12vw", width: "100%" }}>
        <Row style={{ marginBottom: "5vw", marginTop: "3vh" }}>
          <Col xs={6}>
            <Cir src={circle1} />
          </Col>
          <Col xs={6}>
            <Zag src={zig} />
          </Col>
        </Row>
        <Row style={centerTable}>
          <Text>Thank you to our sponsors!</Text>
        </Row>

        <Row style={centerTable}>
          <Col xs={12} md={4} style={centerTable}>
            <img style={Logo} src={twillio} />
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <img style={Logo} src={google} />
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <img style={Logo} src={giphy} />
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <img style={Liber} src={liberty} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
