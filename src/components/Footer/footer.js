import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
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
  font-size: 3vw;
  color: #ffffff;
  display: flex;
  margin-bottom: 10%;
`;

const Logo = {
  height: "7vh",
  padding: "0 7vh 5vh 7vh"
};

const centerTable = {
  display: "flex",
  justifyContent: "center"
};

export class Footer extends Component {
  render() {
    return (
      // <Wave2>
      // <Wave1>
      <div style={{ paddingTop: "12vw" }}>
        <Grid fluid>
          <Row style={{ marginBottom: "5vw" }}>
            <Col className="hidden-xs hidden-sm" xs={6}>
              <div style={{ marginLeft: "0vw" }}>
                <img src={circle1} />
              </div>
            </Col>
            <Col className="hidden-xs hidden-sm" xs={6}>
              <div style={{ marginLeft: "20vw" }}>
                <img src={zig} />
              </div>
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
          </Row>

          <Row style={centerTable}>
            <Col xs={12} md={4} style={centerTable}>
              <img style={{ height: "17vh" }} src={liberty} />
            </Col>
          </Row>
        </Grid>
      </div>
      // </Wave1>
      // </Wave2>
    );
  }
}

export default Footer;
