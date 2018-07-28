import React, { Component } from "react";
import styled from "styled-components";

// import wave1 from "../../assets/Waves/Footer_Curve1.svg";
// import wave2 from "../../assets/Waves/Footer_Curve2.svg";
import circle1 from "../../assets/Circles/Circle_pink.svg";

import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";
import { Grid, Row, Col } from "react-flexbox-grid";

/* const Wave2 = styled.div`
  background: url(${wave2}) no-repeat bottom left;
  background-size: contain;
  display: flex;
`; 

const Wave1 = styled.div`
  background: url(${wave1}) no-repeat bottom left;
  background-size: contain;
  display: flex;
`; */

const parentFlex = {
  display: "flex",
  justifyContent: "center"
};

const Text = styled.div`
  font-size: 3vw;
  color: #ffffff;
  display: flex;
  margin-right: 20%;
`;

export class Footer extends Component {
  render() {
    return (
      // <Wave2>
      // <Wave1>
      <div style={parentFlex}>
        <Grid fluid>
          <Row>
            <Col xs={6}>
              <div>
                <img src={circle1} />
              </div>
            </Col>

            <Col xs={6}>
              <p>Design two</p>
            </Col>
          </Row>

          <Row style={{ display: "flex", justifyContent: "center" }}>
            <p>Thank you to our sponsors</p>
          </Row>

          <Row>
            <Col>
              <p>Sponsor1</p>
            </Col>
            <Col>
              <p>Sponsor2</p>
            </Col>
            <Col>
              <p>Sponosor3</p>
            </Col>
          </Row>

          <Row>
            <Text>
              <img src={logoFooter} />
              <p>Back to Top</p>
            </Text>
          </Row>
        </Grid>
      </div>
      // </Wave1>
      // </Wave2>
    );
  }
}

export default Footer;
