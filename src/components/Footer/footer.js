import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import circle1 from "../../assets/Circles/Circle_Green.svg";
import zig from "../../assets/ZigZags/Line_Orng2.svg";

import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";

import twillio from "../../assets/SponsorLogos/Twillio/twillioRed.png";
import google from "../../assets/SponsorLogos/Google/google.png";
import giphy from "../../assets/SponsorLogos/Giphy/giphyIcon.png";

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2vw;
  color: #ffffff;
  display: flex;
`;

export class Footer extends Component {
  render() {
    return (
      // <Wave2>
      // <Wave1>
      <div>
        <Grid fluid>
          <Row style={{ marginBottom: "5vw" }}>
            <Col className="hidden-xs" xs={6}>
              <div style={{ marginLeft: "-3vw" }}>
                <img src={circle1} />
              </div>
            </Col>
            <Col className="hidden-xs" xs={6}>
              <div style={{ marginLeft: "150px" }}>
                <img src={zig} />
              </div>
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Text>Thank you to our sponsors</Text>
          </Row>

          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col xs={4}>
              <img
                style={{ height: "5vw", padding: "0 9vw 0 9vw" }}
                src={twillio}
              />
            </Col>
            <Col xs={4}>
              <img
                style={{ height: "5vw", padding: "0 9vw 0 9vw" }}
                src={google}
              />
            </Col>
            <Col xs={4}>
              <img
                style={{ height: "5vw", padding: "0 9vw 0 9vw" }}
                src={giphy}
              />
            </Col>
          </Row>
        </Grid>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Text>
            <img src={logoFooter} />
            <p>Back to Top</p>
          </Text>
        </div>
      </div>
      // </Wave1>
      // </Wave2>
    );
  }
}

export default Footer;
