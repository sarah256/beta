import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FAQEntryTitle = styled.div`
  margin-bottom: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: #3cbfce;
`;

const FAQAnswer = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 27px;
  font-weight: 300;
`;

class FAQEntry extends Component {
  render() {
    return (
      <React.Fragment>
        <FAQEntryTitle> {this.props.title} </FAQEntryTitle>
        <FAQAnswer> {this.props.body} </FAQAnswer>
      </React.Fragment>
    );
  }
}

FAQEntry.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default FAQEntry;
