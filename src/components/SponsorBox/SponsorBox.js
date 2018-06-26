import React, { Fragment } from "react";
import Header from "../Header";

const SponsorBox = () => (
  <Fragment>
    <Header
      contentProp="Sponsor"
      colorProp="#dc4b6a"
      backgroundProp="#FFFFFF"
    />
    <p>We would love to have you on board. Contact us here!</p>
    <button>Contact Us</button>
  </Fragment>
);

export default SponsorBox;
