import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimeCell = styled.td`
  padding-right: 10px;
  text-align: right;

  font-family: "Roboto", sans-serif;
  font-size: 1.75em;
  font-weight: 400;
  color: #ef9b75;
  @media (max-width: 500px) {
    font-size: 0.875em;
  }
`;

const EventCell = styled.td`
  padding-left: 7%;
  white-space: nowrap;
  font-family: "Roboto Slab", serif;
  font-size: 1.5em;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.875em;
  }
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
