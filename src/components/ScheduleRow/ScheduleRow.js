import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TimeCell = styled.td`
  text-align: right;
  padding-right: 30px;
  text-transform: uppercase;

  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: #ef833f;
`;

const EventCell = styled.td`
  padding-left: 30px;
  text-transform: uppercase;

  font-family: "Roboto Slab", serif;
  font-size: 32px;
  font-weight: 300;
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
