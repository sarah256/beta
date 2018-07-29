import React, { Component } from "react";
import { ScheduleTable } from "../";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import gridBlue from "./../../assets/Grids/Dot_Grid_Blue.svg";
import circleGreen from "./../../assets/Circles/Half_Circle_Green.svg";
import zigzag from "./../../assets/ZigZags/Line_Green2.svg";

const eventsSat = [
  { time: "9:30 AM", name: "registration" },
  { time: "11:30 AM", name: "opening ceremony" },
  { time: "12:00 PM", name: "lunch" },
  { time: "1:00 PM", name: "team formation" },
  { time: "1:30 PM", name: "hacking begins" },
  { time: "6:30 PM", name: "dinner" },
  { time: "12:00 AM", name: "midnight snack" }
];

const eventsSun = [
  { time: "7:00 AM", name: "breakfast" },
  { time: "11:00 AM", name: "submissions due" },
  { time: "11:00 PM", name: "lunch" },
  { time: "12:00 PM", name: "judging expo" },
  { time: "2:00 PM", name: "closing ceremony" }
];

const EventScheduleTitle = styled.h2`
  color: #ef833f;
  font-family: "Roboto", sans-serif;
  font-size: 33px;
  font-weight: 500;
  position: relative;
  margin-left: 17%;
`;

const GreenGrid = styled.img`
  margin-top: 100%;
`;

class EventSchedule extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid fluid style={{ padding: "0" }}>
          <Row>
            <Col
              className="hidden-md hidden-sm hidden-xs"
              lg={1}
              style={{ display: "flex" }}
            >
              <img src={circleGreen} />
            </Col>
            <Col md={11} lg={9}>
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
            <Col className="hidden-sm hidden-xs" md={1} lg={2}>
              <img src={zigzag} align="right" />
              <GreenGrid src={gridBlue} />
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default EventSchedule;
