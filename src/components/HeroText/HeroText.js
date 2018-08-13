import React from "react";
import PropTypes from "prop-types";
import "../../index.css";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import blueCircle from "./../../assets/Circles/Circle_Blue2.svg";
import redTri from "./../../assets/Triangles/Triangle_Pink1.svg";
import zigZag from "./../../assets/ZigZags/Line_Orng1.svg";

const Circle = styled.img`
  float: right;
  margin-bottom: 25%;
  margin-right: 30%;
  margin-top: -10%;
`;

const Triangle = styled.img`
  margin-top: 5%;
  margin-left: 10%;
  @media (max-width: 500px) {
    height: 40px;
    margin-left: 5%;
  }
`;

const Line = styled.img`
  float: right;
  margin-right: 10%;
  margin-top: -14%;

  @media (max-width: 767px) {
    height: 80px;
  }

  @media (max-width: 500px) {
    height: 50px;
    margin-top: -10%;
  }

  @media (max-width: 380px) {
    visibility: hidden;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: #ffffff;
  display: inline;
  line-height: 0%;
  font-size: 4.68em;
  @media (max-width: 1235px) {
    font-size: 6vw;
  }

  @media (max-width: 500px) {
    font-size: 1.87em;
  }
`;

const Bold = Title.extend`
  font-weight: 700;
`;

const Loc = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: #ffffff;
  line-height: 10%;
  font-size: 1.56em;
  @media (max-width: 1235px) {
    font-size: 2vw;
  }

  @media (max-width: 500px) {
    font-size: 0.875em;
  }
`;

const Date = Loc.extend`
  line-height: 0%;
`;

var Header = {
  paddingTop: "15%",
  paddingBottom: "10%",
  paddingLeft: "15%"
};

class HeroText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="Flair">
          <Row style={{ width: "100%" }}>
            <Col md={12} style={Header}>
              <Title>{this.props.title}</Title>
              <Bold>{this.props.titleBold}</Bold>
              <Date>{this.props.date}</Date>
              <Loc>{this.props.location}</Loc>
              <Line src={zigZag} />
            </Col>
          </Row>
          <Row style={{ width: "100%" }}>
            <Col md={6}>
              <Triangle src={redTri} />
            </Col>
            <Col md={6} className="hidden-sm hidden-xs">
              <Circle src={blueCircle} />
            </Col>
          </Row>
        </Row>
      </React.Fragment>
    );
  }
}

HeroText.propTypes = {
  title: PropTypes.string,
  titleBold: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string
};

HeroText.defaultProps = {
  title: "Website Title",
  date: "Hackathon Date",
  location: "Location"
};

export default HeroText;
