import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FAQEntryTitle = styled.div`
  color: #00ffff;
  margin-bottom: 15px;
  font-size: 125%;
`;

class FAQEntry extends Component {
  render() {
    return (
      <React.Fragment>
        <FAQEntryTitle> {this.props.title} </FAQEntryTitle>
        <div> {this.props.body} </div>
      </React.Fragment>
    );
  }
}

FAQEntry.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default FAQEntry;
