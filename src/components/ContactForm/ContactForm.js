import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ContactFormBody } from "../";

import zigzag from "./../../assets/ZigZags/Line_Green2.svg";
import triangOrange from "./../../assets/Triangles/Tri_Orng1.svg";

const ContactUs = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 40px;
  margin: 5px 0;
`;

const ContactBody = ContactUs.extend`
  font-size: 18px;
  margin-bottom: 25px;
`;

const FormTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.color};
  @media (max-width: 1070px) and (min-width: 866px) {
    min-height: 48px;
  }
`;

const FormBody = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 12px;
  @media (max-width: 1370px) and (min-width: 768px) {
    min-height: 32px;
  }
`;

const ZigZag = styled.img`
  float: right;
  position: relative;
  top: 55%;
  z-index: -1;
`;

const Triangle = styled.img`
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";

  position: relative;
  top: 70%;
  left: -25px;

  z-index: -1;
`;

export class ContactForm extends Component {
  render() {
    return (
      <Grid fluid style={{ padding: "0" }}>
        <Row>
          <Col md={2} xs={1}>
            <Triangle src={triangOrange} />
          </Col>
          <Col md={8} xs={10}>
            <ContactUs> Contact Us </ContactUs>
            <Row>
              <Col md={9}>
                <ContactBody>
                  Reach us on Facebook at BostonHacks, Twitter @boston_hacks,
                  Instagram @bostonhacks, and by email at info@bostonhacks.io!
                </ContactBody>
              </Col>
            </Row>
            <Row>
              <Col md={5} xs={12}>
                <FormTitle color="#2FB5E3">
                  Have a Question or Suggestion?
                </FormTitle>
                <FormBody>
                  Send us any questions, comments, concerns, or suggestions
                  here!
                </FormBody>
                <ContactFormBody color="#2fb5e3" />
              </Col>
              <Col mdOffset={2} md={5} xs={12}>
                <FormTitle color="#F05352">Interested in Sponsoring?</FormTitle>
                <FormBody>
                  We’d love to have you on board. Contact us here!
                </FormBody>
                <ContactFormBody color="#f05352" />
              </Col>
            </Row>
          </Col>
          <Col md={2} xs={1}>
            <ZigZag src={zigzag} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ContactForm;
