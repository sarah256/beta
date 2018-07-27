import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import circle1 from "../TracksAndWorkshops/assets/thin circle pink 2.png";
import wave2 from "../../Waves/Footer_Wave.svg";

const Wave1 = styled.div`
  height: 100vh;
  background: url(${wave2});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

/* const Wave2 = styled.div`
  background: url(${wave2}) no-repeat bottom left;
  background size: contain;
`; */

const parentFlex = {
  display: "flex"
};

class Footer extends Component {
  render() {
    return (
      <Wave1>
        <div style={parentFlex}>
          <Row>
            <Col className="hidden-xs" xs={6}>
              <div>
                <img src={circle1} />
              </div>
            </Col>

            <Col className="hidden-xs" xs={6}>
              <p>Design two</p>
            </Col>
          </Row>
        </div>
      </Wave1>
    );
  }
}

export default Footer;
