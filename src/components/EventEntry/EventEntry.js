import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.div`
  text-transform: uppercase;
`;

class EventEntry extends Component {
  render() {
    return <Text> {this.props.text} </Text>;
  }
}

EventEntry.propTypes = {
  text: PropTypes.string
};

export default EventEntry;
