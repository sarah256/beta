import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";
import facebook from "../../assets/Logos/fb.svg";
import twitter from "../../assets/Logos/Twitter.svg";

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2vh;
  color: #ffffff;
  display: flex;
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
  align-content: flex-end;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
`;

const Spacer = {
  marginRight: "5vh"
};

export class FooterBar extends Component {
  render() {
    return (
      <Bar>
        <Grid style={{ margin: "0", paddingLeft: "5vh" }}>
          <Row>
            <Align>
              <Col style={Spacer}>
                <img src={logoFooter} style={{ height: "1.6em" }} />
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
                  <a href="#top">Back to Top</a>
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
