import React, { Component, Fragment } from "react";
import Header from "../Header";

class SponsorBox extends Component {
  handleSponsorButtonClick = e => console.log("Sponsor button clicked!");

  render() {
    return (
      <Fragment>
        <Header
          contentProp="Sponsor"
          colorProp="#dc4b6a"
          backgroundProp="#FFFFFF"
        />
        <p>We would love to have you on board. Contact us here!</p>
        <button onClick={this.handleSponsorButtonClick}>Contact Us</button>
      </Fragment>
    );
  }
}

export default SponsorBox;
