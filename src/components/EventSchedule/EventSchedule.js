import React, { Component } from "react";
import { ScheduleTable } from "../";
import styled from "styled-components";

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

const EventScheduleBody = styled.div`
  table {
    display: inline;
  }
  table + table {
    margin-left: 30px;
  }
`;

const EventScheduleTitle = styled.h2`
  color: #ef833f;
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-weight: 500;
  position: relative;
  left: 210px;
`;

class EventSchedule extends Component {
  render() {
    return (
      <React.Fragment>
        <EventScheduleTitle> Event Schedule </EventScheduleTitle>
        <EventScheduleBody>
          <ScheduleTable events={eventsSat} title="Saturday" />
          <ScheduleTable events={eventsSun} title="Sunday" />
        </EventScheduleBody>
      </React.Fragment>
    );
  }
}

export default EventSchedule;
