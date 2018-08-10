import React, { Component } from "react";
import { Grid, Row } from "react-flexbox-grid";
import "../../contact.css";

import headwave from "../../assets/Waves/ConactHead.svg";
import orngrid from "../../assets/Grids/Dot Grid_Orng2.svg";
import bluecircle from "../../assets/Circles/Circle_Blue2.svg";

class ContactHead extends Component {
  render() {
    return (
      <div className="container">
        <img src={headwave} />
        <Grid fluid className="underFlair">
          <Row className="hidden-xs hidden-sm hidden-md">
            <img style={{ marginRight: "70vw" }} src={orngrid} />
            <img src={bluecircle} />
          </Row>
        </Grid>
      </div>
    );
  }
}
export default ContactHead;
