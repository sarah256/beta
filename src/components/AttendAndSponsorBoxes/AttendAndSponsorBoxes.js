import React, { Component } from "react";
import AttendBox from "../AttendBox";
import SponsorBox from "../SponsorBox";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import gridOrng from "./../../assets/Grids/Dot_Grid_Orng1.svg";
import redCircle from "./../../assets/Circles/Circle_pink.svg";
import blueCircle from "./../../assets/Circles/Circle_Blue2.svg";

const AttArea = styled.div`
  max-width: 400px;
  margin: auto;
  padding-right: 15%;
  @media (max-width: 767px) {
    padding-right: 0;
    padding-bottom: 10%;
  }

  @media (max-width: 500px) {
    margin: 0 15% 0 15%;
  }
`;

const SponsorArea = styled.div`
  max-width: 400px;
  margin: auto;
  @media (max-width: 500px) {
    margin: 0 15% 0 15%;
  }
`;

const Grid = styled.img`
  position: relative;
  top: 50%;
  @media (max-width: 500px) {
    height: 85px;
    width: auto;
  }
`;

const CircleRed = styled.img`
  position: relative;
  margin: 8% 0 5% 75%;
  @media (max-width: 500px) {
    height: 40px;
    width: auto;
  }
`;

const CircleBlue = styled.img`
  float: right;
  margin: -70% -4% 0 0;
  @media (max-width: 500px) {
    height: 43px;
  }
`;

class AttendAndSponsorBoxes extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={2} className="hidden-xs hidden-sm">
            <Grid src={gridOrng} />
          </Col>
          <Col md={5}>
            <AttArea>
              <AttendBox />
            </AttArea>
          </Col>
          <Col md={4}>
            <SponsorArea>
              <SponsorBox />
            </SponsorArea>
          </Col>
          <Col md={1} className="hidden-md hidden-lg hidden-xl">
            <CircleBlue src={blueCircle} />
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="hidden-md hidden-lg hidden-xl">
            <Grid src={gridOrng} />
          </Col>
          <Col md={12} xs={6}>
            <CircleRed src={redCircle} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AttendAndSponsorBoxes;
