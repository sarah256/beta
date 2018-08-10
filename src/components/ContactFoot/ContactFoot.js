import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "../../contact.css";

// import footwave from "../../assets/Waves/ContactFoot.svg";
import greencircle from "../../assets/Circles/Circle_Green.svg";
import bluegrid from "../../assets/Grids/Sq_grid_Blue.svg";
import orngcircle from "../../assets/Circles/Circle_pink.svg";

class ContactFoot extends Component {
  render() {
    return (
      <Grid fluid style={{ padding: "0", margin: "0" }}>
        <div className="footFlair">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "15vh"
            }}
          >
            <Col
              className="hidden-xs hidden-sm hidden-md"
              style={{ paddingRight: "60%" }}
            >
              <img src={bluegrid} />
            </Col>
            <Col className="hidden-xs hidden-sm hidden-md">
              <img src={orngcircle} />
            </Col>
          </Row>
          <div className="contactFoot">
            <Row
              className="hidden-xs hidden-sm hidden-md"
              style={{ paddingTop: "15%" }}
            >
              <img src={greencircle} />
            </Row>
          </div>
        </div>
      </Grid>
    );
  }
}
export default ContactFoot;
