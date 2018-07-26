import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Taw = styled.div`
  height: 100%;
  width: 100%;
  font-family: .SFNSDisplay;
  color: #222222;
  background-height: auto;
  background-size: cover;
  background-color: rgb(61, 190, 205);
`;

const centeredImg = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "..",
  height: ".."
};

export class TracksAndWorkshops extends Component {
  render() {
    return (
      <Taw>
        <div>
          <br />
          <br />
          <Grid fluid>
            <Row>
              <Col className="hidden-xs" sm={6}>
                <div style={centeredImg} />
              </Col>
              <Col xs={12} sm={6}>
                <h3 style={{ color: "#B7D98B" }} align="right">
                  Tracks and Workshops
                </h3>
                <p align="right">
                  Tracks are optional specialized topics or technologies you can
                  aim your project at. We&apos;ll have sponsors, workshops, and
                  mentors to help you with your track-based project (as well as
                  specialized prizes). Tracks are optional, make a hack
                  you&apos;re interested in! Check back soon to see what our
                  tracks will be this year!
                </p>
              </Col>
            </Row>

            <Row>
              <Col smOffset={1} sm={5}>
                <h3 style={{ color: "#B7D98B" }}> Last year&apos;s tracks:</h3>
              </Col>
              <Col className="hidden-xs" sm={5}>
                <div style={centeredImg} />
              </Col>
            </Row>

            <Row>
              <Col smOffset={1} sm={3} xs={12}>
                <h3 style={{ color: "#EEEEEE" }}> Web and Mobile</h3>
                <p>
                  Led by OpenWeb BU, hackers learned how to make a website or
                  mobile app from the ground up.
                </p>
              </Col>
              <Col sm={3} xs={12}>
                <h3 style={{ color: "#EEEEEE" }}> Machine Learning</h3>
                <p>
                  Led by BU’s Machine Intelligence Community, hackers learned
                  how to get into the basics of several ML frameworks, and moved
                  on to more advanced topics.
                </p>
              </Col>
              <Col sm={3} xs={12}>
                <h3 style={{ color: "#EEEEEE" }}> Virtual Reality</h3>
                <p>
                  Led by BU AR/VR, hackers got a jumpstart into creating in 3D.
                  Then they created hacks on the Oculus Rifts we made available
                  to them.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="hidden-xs" xs={3}>
                <div style={centeredImg} />
              </Col>
              <Col className="hidden-xs" xsOffset={6} xs={3}>
                <div style={centeredImg} />
              </Col>
            </Row>
          </Grid>
          <br />
          <br />
        </div>
      </Taw>
    );
  }
}

// Header.propTypes = {
//   contentProp: PropTypes.string,
//   colorProp: PropTypes.string,
//   backgroundProp: PropTypes.string
// };

// Header.defaultProps = {
//   contentProp: "A header should go here",
//   colorProp: "#dc4b6a",
//   backgroundProp: "#3dbecd"
// };

export default TracksAndWorkshops;
