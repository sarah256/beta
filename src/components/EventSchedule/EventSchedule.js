import React, { Component } from "react";
import { ScheduleTable } from "../";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import gridGreen1 from "./assets/dot grid green 1.svg";
import circleBlue1 from "./assets/Thin circle blue 1.svg";

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
  font-size: 48px;
  font-weight: 500;
  position: relative;
  margin-left: 15%;
`;

class EventSchedule extends Component {
  render() {
    return (
      <React.Fragment>
        <Flex>
          <Flex
            width={[0, 1 / 20]}
            flexDirection="column"
            justifyContent="center"
          >
            <img src={circleBlue1} />
          </Flex>
          <Box width={[1, 85 / 100]}>
            <EventScheduleTitle> Event Schedule </EventScheduleTitle>
            <Flex flexWrap="wrap" justifyContent="space-between">
              <Box px={2} width={[1, 1, 1 / 2]}>
                <ScheduleTable events={eventsSat} title="Saturday" />
              </Box>
              <Box px={2} width={[1, 1, 1 / 2]}>
                <ScheduleTable events={eventsSun} title="Sunday" />
              </Box>
            </Flex>
          </Box>
          <Flex width={[0, 1 / 10]} alignItems="center" justifyContent="center">
            <img src={gridGreen1} />
          </Flex>
        </Flex>
      </React.Fragment>
    );
  }
}

export default EventSchedule;
