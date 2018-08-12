import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

const ContactButton = styled.button`
  background-color: #f05352;
`;

const DocButton = styled.button`
  background-color: #ef9b75;
`;

const Text = styled.div`
  font-family: "Roboto slab", sans-serif;
  font-weight: 300;
  font-size: 1.375em;
  padding-top: 5%;
  padding-bottom: 8%;

  @media (max-width: 850px) {
    font-size: 1.125em;
  }

  @media (max-width: 500px) {
    font-size: 1.06em;
  }
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  font-weight: 500;
  margin: 0;
  color: #f05352;
  @media (max-width: 500px) {
    font-size: 1.56em;
  }
`;

class SponsorBox extends Component {
  handleClick = e => console.log("Sponsor button clicked!");

  render() {
    return (
      <Fragment>
        <Title>Sponsor</Title>
        <Text>
          We would love to have you on board. Contact us or check our sponsor
          document!
        </Text>
        <Row>
          <Col md={5} xs={5}>
            <ContactButton onClick={this.handleClick}>Contact Us</ContactButton>
          </Col>
          <Col md={5} xs={5}>
            <DocButton onClick={this.handleClick}> Sponsor Doc</DocButton>
          </Col>
          <Col md={2} xs={2} />
        </Row>
      </Fragment>
    );
  }
}

export default SponsorBox;
