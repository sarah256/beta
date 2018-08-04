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
  color: #ef9b75;
  font-family: "Roboto", sans-serif;
  font-size: 33px;
  font-weight: 500;
  position: relative;
  margin-left: 13%;
  @media (max-width: 500px) {
    font-size: 17px;
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
  z-index: -1;
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
            <Col xs={10} lg={9}>
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
            <Col xs={1} lg={2}>
              <img src={zigzag} align="right" className="icons1" />
              <GreenGrid src={gridBlue} className="icons1" />
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default EventSchedule;
