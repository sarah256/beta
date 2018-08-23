import React, { Component, Fragment } from "react";
import styled from "styled-components";

import sponsor from "./../../documents/BostonHacks_Sponsorship_Fall_2018.pdf";

const DocButton = styled.button`
  background-color: #f05352;
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
  render() {
    return (
      <Fragment>
        <Title>Sponsor</Title>
        <Text>
          We would love to have you on board. Contact us at&nbsp;
          <a href="mailto:contact@bostonhacks.io" style={{ color: "#f05352" }}>
            contact@bostonhacks.io
          </a>
          or check our sponsor document!
        </Text>
        <a href={sponsor}>
          <DocButton>Learn more</DocButton>
        </a>
      </Fragment>
    );
  }
}

export default SponsorBox;
