import React, { Component, Fragment } from "react";
import Header from "../Header";

class SponsorBox extends Component {
  handleClick = e => console.log("Sponsor button clicked!");

  render() {
    return (
      <Fragment>
        <Header contentProp="Sponsor" colorProp="#f05352" />
        <p>We would love to have you on board. Contact us here!</p>
        <button
          style={{ backgroundColor: "#f05352" }}
          onClick={this.handleClick}
        >
          Contact Us
        </button>
      </Fragment>
    );
  }
}

export default SponsorBox;
