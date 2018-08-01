import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";
import facebook from "../../assets/Logos/fb.svg";
import twitter from "../../assets/Logos/Twitter.svg";

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1vw;
  color: #ffffff;
  display: flex;
  margin-bottom: 10%;
`;

const Bar = styled.div`
  background-color: #2a2563;
  margin-top: -1vh;
  width: 100%;
  padding: 2vw 0 2vw 0;
`;

const Align = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  text-transform: uppercase;
`;

const Spacer = {
  marginRight: "2vw"
};

export class FooterBar extends Component {
  render() {
    return (
      <Bar>
        <Grid style={{ margin: "0", paddingLeft: "5vh" }}>
          <Row>
            <Align>
              <Col style={Spacer}>
                <img src={logoFooter} style={{ height: "5vh" }} />
              </Col>
              <Col style={Spacer}>
                <a href="https://www.facebook.com/bostonhacks/">
                  <img src={facebook} />
                </a>
              </Col>

              <Col style={Spacer}>
                <a href="https://twitter.com/boston_hacks">
                  <img src={twitter} />
                </a>
              </Col>

              <Col>
                <Text>
                  <a href="#top">Back to Tops</a>
                </Text>
              </Col>
            </Align>
          </Row>
        </Grid>
      </Bar>
    );
  }
}

export default FooterBar;
