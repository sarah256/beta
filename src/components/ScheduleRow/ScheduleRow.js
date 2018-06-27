import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimeCell = styled.td`
  text-align: right;
  padding-right: 10px;
  color: orange;
  text-transform: uppercase;
`;

const EventCell = styled.td`
  padding-left: 10px;
  text-transform: uppercase;
`;

class ScheduleRow extends Component {
  render() {
    return (
      <tr>
        <TimeCell> {this.props.time} </TimeCell>
        <EventCell> {this.props.name} </EventCell>
      </tr>
    );
  }
}

ScheduleRow.propTypes = {
  time: PropTypes.string,
  name: PropTypes.string
};

export default ScheduleRow;
