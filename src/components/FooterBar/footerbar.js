import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";

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
  margin-top: -1vw;
  width: 100%;
  padding: 5vw 0 2vw 0;
`;

const Spacer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  text-transform: uppercase;
`;

export class FooterBar extends Component {
  render() {
    return (
      <Bar>
        <Grid>
          <Row>
            <Spacer>
              <Col style={{ marginRight: "10%" }}>
                <img src={logoFooter} />
              </Col>
              <Col>
                <Text>Back to Top</Text>
              </Col>
            </Spacer>
          </Row>
        </Grid>
      </Bar>
    );
  }
}

export default FooterBar;
