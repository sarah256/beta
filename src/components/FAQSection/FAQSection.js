import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import greenZig from "../../assets/ZigZags/Line_Green1.svg";
import redTrian from "../../assets/Triangles/Triangle_Pink1.svg";

const FAQEntryTitle = styled.div`
  margin-bottom: -10px;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #3bb9e3;
`;

const FAQAnswer = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 20px;
  font-weight: 300;
  max-width: 13em;
  text-align: left;
`;

const FAQHeader = FAQEntryTitle.extend`
  font-size: 35px;
  font-weight: 500;
`;

const FAQHeaderCopy = FAQEntryTitle.extend`
  font-size: 25px;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto Slab", serif;
`;

class FAQSection extends Component {
  render() {
    return (
      <div
        className="parentFlex"
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Grid fluid>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 0 50px 0"
            }}
          >
            <Col xs={12} md={8}>
              <FAQHeader> Frequently Asked Questions </FAQHeader>
              <FAQHeaderCopy>
                <p>
                  The event is still a ways away, so check back <br />
                  closer to the hackathon for more information.
                </p>
              </FAQHeaderCopy>
            </Col>
          </Row>

          <Row style={{ display: "flex", justifyContent: "flex start" }}>
            <div className="hidden-xs" style={{ marginLeft: "-16%" }}>
              <img src={greenZig} />
            </div>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Where is it?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  George Sherman Union, 2nd Floor in Metcalf Hall at 775
                  Commonwealth Avenue, Boston, MA, 02215.
                </p>
              </FAQAnswer>
            </Col>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Who’s coming?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  We expect 400 to 450 hackers from all over North America to
                  attend BostonHacks.
                </p>
              </FAQAnswer>
            </Col>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Who can attend?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  All students are welcome. Unfortunately, we will not be able
                  to accommodate students under 18 this year (unless you are a
                  BU student).
                </p>
              </FAQAnswer>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Do I need experience?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  No experience necessary. We will have plenty of mentors and
                  resources, along with several workshops targeted for
                  beginners. Come learn and experience your first hackathon at
                  BostonHacks!
                </p>
              </FAQAnswer>
            </Col>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Are there any rules?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  We want to ensure a positive experience for all participants.
                  We encourage you to read the Code of Conduct.
                </p>
              </FAQAnswer>
            </Col>
            <Col xs={12} md={4}>
              <FAQEntryTitle>What should I bring?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  You should bring your laptop, phone, chargers, toiletries, and
                  optionally a sleeping bag. All food and other accommodations
                  will be taken care of.
                </p>
              </FAQAnswer>
            </Col>
          </Row>

          <Row style={{ marginRight: "-500px" }}>
            <img src={redTrian} />
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Can we form teams?</FAQEntryTitle>
              <FAQAnswer>
                <p>
                  Of course you can! We encourage people to work in teams of up
                  to 5 people. You may opt-in to team formation during
                  registration which will match you with an ideal team. You can
                  work alone, but it won’t be the same.
                </p>
              </FAQAnswer>
            </Col>
            <Col xs={12} md={4}>
              <FAQEntryTitle>Does it cost anything?</FAQEntryTitle>
              <FAQAnswer>
                <p>BostonHacks is 100% free. You don’t have to spend a dime!</p>
              </FAQAnswer>
            </Col>
            <Col xs={12} md={4}>
              <FAQEntryTitle>
                Will there be travel reimbursements?
              </FAQEntryTitle>
              <FAQAnswer>
                <p>
                  We’re handling travel reimbursements on a case-by-case basis.
                  We’re also working on potentially providing busses to regions
                  like New York and Canada.
                </p>
              </FAQAnswer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FAQSection;
