import React, { Component } from "react";
import { EventEntry } from "../";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimeCell = styled.td`
  text-align: right;
  padding-right: 10px;
  color: orange;
`;

const EventCell = styled.td`
  padding-left: 10px;
`;

class ScheduleRow extends Component {
  render() {
    return (
      <tr>
        <TimeCell>
          <EventEntry text={this.props.time} />
        </TimeCell>
        <EventCell>
          <EventEntry text={this.props.name} />
        </EventCell>
      </tr>
    );
  }
}

ScheduleRow.propTypes = {
  time: PropTypes.string,
  name: PropTypes.string
};

export default ScheduleRow;
