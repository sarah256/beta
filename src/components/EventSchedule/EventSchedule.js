import React, { Component } from "react";
import { ScheduleTable } from "../";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import gridBlue from "./../../assets/Grids/Dot_Grid_Blue.svg";
import circleGreen from "./../../assets/Circles/Half_Circle_Green.svg";
import zigzag from "./../../assets/ZigZags/Line_Green2.svg";

const eventsSat = [
  { time: "9:30 AM", name: "Registration" },
  { time: "11:30 AM", name: "Opening Ceremony" },
  { time: "12:00 PM", name: "Lunch" },
  { time: "1:00 PM", name: "Team formation" },
  { time: "1:30 PM", name: "Hacking begins" },
  { time: "6:30 PM", name: "Dinner" },
  { time: "12:00 AM", name: "Midnight snack" }
];

const eventsSun = [
  { time: "7:00 AM", name: "Breakfast" },
  { time: "11:00 AM", name: "Submissions due" },
  { time: "11:00 PM", name: "Lunch" },
  { time: "12:00 PM", name: "Judging expo" },
  { time: "2:00 PM", name: "Closing ceremony" }
];

const EventScheduleTitle = styled.h2`
  padding-left: calc(120px + 1.2em);
  color: #ef9b75;
  font-family: "Roboto", sans-serif;
  font-size: 2.06em;
  font-weight: 500;
  position: relative;
  @media (max-width: 500px) {
    font-size: 1.56em;
    text-align: center;
    padding-left: 0;
  }
  @media (max-width: 991px) {
    text-align: center;
    padding-left: 0;
  }
`;

const CircleGreen = styled.img`
  position: relative;
  top: 50%;
`;

const GreenGrid = CircleGreen.extend`
  @media (max-width: 990px) {
    float: right;
  }
  @media (max-width: 630px) {
    width: 100px;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
  z-index: -1;
`;

const ZigZag = styled.img`
  position: relative;
  float: right;
  @media (max-width: 767px) {
    margin-top: 150px;
  }
  @media (max-width: 630px) {
    width: 80px;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
`;

class EventSchedule extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid fluid style={{ padding: "0" }}>
          <Row>
            <Col xs={1}>
              <CircleGreen src={circleGreen} className="icons2" />
            </Col>
            <Col xs={10} lg={10}>
              <EventScheduleTitle> Event Schedule </EventScheduleTitle>
              <Row>
                <Col md={12} lg={6}>
                  <ScheduleTable events={eventsSat} title="Saturday" />
                </Col>
                <Col md={12} lg={6}>
                  <ScheduleTable events={eventsSun} title="Sunday" />
                </Col>
              </Row>
            </Col>
            <Col xs={1} lg={1}>
              <ZigZag src={zigzag} />
              <GreenGrid src={gridBlue} />
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default EventSchedule;
