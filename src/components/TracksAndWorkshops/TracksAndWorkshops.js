import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import gridBlue from "./../../assets/Grids/Sq_grid_Blue.svg";
import circleBlue from "./../../assets/Circles/Circle_Blue1.svg";
import triangOrange from "./../../assets/Triangles/Tri_Orng1.svg";

const TracksTitle = styled.p`
  color: #f05352;
  font-family: "Roboto", sans-serif;
  font-size: 2.75em;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1.3em;
  }
`;

const TracksBody = styled.p`
  color: #ffffff;
  font-family: "Roboto slab", serif;
  font-size: 1.5em;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`;

const LastYear = TracksTitle.extend`
  font-size: 2.3em;
  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

const TrackName = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.75em;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

const TracksCopy = TracksBody.extend`
  font-size: 1.2em;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 12.5px;
  }
`;

const Row1 = styled.div`
  margin-top: 18%;
  margin-right: 5%;
  @media (min-width: 1500px) {
    margin-bottom: 15%;
  }
`;

const Row2 = styled.div`
  margin-left: 8%;
  margin-right: 5%;
`;

const Row3 = styled.div`
  margin-left: 5%;
  margin-bottom: 22%;
`;

export class TracksAndWorkshops extends Component {
  render() {
    return (
      <div className="TracksAndWorkshops">
        <div className="background-div1" />
        <div className="background-div2" />
        <div className="background-div3" />
        <Grid fluid>
          <Row1>
            <Row className="TracksTitle">
              <Col md={12} lg={7} align="center">
                <img src={gridBlue} className="icons1" />
              </Col>
              <Col md={12} lg={5}>
                <TracksTitle> Tracks and Workshops </TracksTitle>
                <TracksBody>
                  Tracks are optional specialized topics or technologies you can
                  aim your project at. We&apos;ll have sponsors, workshops, and
                  mentors to help you with your track-based project (as well as
                  specialized prizes). Tracks are optional, make a hack
                  you&apos;re interested in! Check back soon to see what our
                  tracks will be this year!
                </TracksBody>
              </Col>
            </Row>
          </Row1>
          <Row2>
            <Row>
              <Col md={6} lg={9}>
                <LastYear> Last year&apos;s tracks: </LastYear>
              </Col>
              <Col md={6} lg={3} align="center">
                <img src={circleBlue} className="icons1" />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={3}>
                <TrackName> Web and mobile </TrackName>
                <TracksCopy>
                  Led by <b> OpenWeb BU </b>, hackers learned how to make a
                  website or mobile app from the ground up.
                </TracksCopy>
              </Col>
              <Col md={12} lg={3}>
                <TrackName> Machine Learning </TrackName>
                <TracksCopy>
                  Led by <b> BU’s Machine Intelligence Community </b>, hackers
                  learned how to get into the basics of several ML frameworks,
                  and moved on to more advanced topics.
                </TracksCopy>
              </Col>
              <Col xs={10} lg={3}>
                <TrackName> Virtual Reality </TrackName>
                <TracksCopy>
                  Led by <b> BU AR/VR </b>, hackers got a jumpstart into
                  creating in 3D. Then they created hacks on the Oculus Rifts we
                  made available to them.
                </TracksCopy>
              </Col>
            </Row>
          </Row2>
          <Row3>
            <img src={triangOrange} className="icons1" />
          </Row3>
        </Grid>
      </div>
    );
  }
}

export default TracksAndWorkshops;
