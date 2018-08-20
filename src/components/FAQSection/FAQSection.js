import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import greenZig from "../../assets/ZigZags/Line_Green1.svg";
import redTrian from "../../assets/Triangles/Triangle_Pink2.svg";
import grid from "../../assets/Grids/Sq_grid_Blue.svg";
import circle from "../../assets/Circles/Half_Circle_Orng.svg";
import mlhCode from "../../documents/mlh-code-of-conduct.pdf";

const FAQEntryTitle = styled.div`
  margin-bottom: -10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.9em;
  font-weight: 400;
  color: #3bb9e3;
`;

const FAQAnswer = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 1.5em;
  font-weight: 300;
  max-width: 13em;
  text-align: left;

  p {
    a {
      color: #f05352;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

const FAQHeader = FAQEntryTitle.extend`
  font-size: 2em;
  font-weight: 500;
  margin-top: 10%;
`;

const FAQHeaderCopy = FAQEntryTitle.extend`
  font-size: 1.2em;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto Slab", serif;
  max-width: 65%;
  margin-top: 3%;
`;

var FaqStyle = {
  display: "flex",
  justifyContent: "center"
};

const Circle = styled.img`
  float: left;
  display: flex;
  margin-top: -25%;
  @media (max-width: 767px) {
    margin-top: -300%;
  }
`;

const Zig = styled.img`
  width: 100px;
  float: left;
  display: flex;
  margin-top: 40%;

  @media (max-width: 767px) {
    margin-top: -450%;
    margin-left: -5%;
  }

  @media (max-width: 650px) {
    margin-top: -550%;
  }

  @media (max-width: 500px) {
    margin-top: -650%;
  }

  @media (max-width: 400px) {
    visibility: hidden;
  }
`;

const Trig = styled.img`
  float: right;
  margin-top: 150%;

  @media (max-width: 767px) {
    margin-top: -200%;
    width: 50px;
  }

  @media (max-width: 650px) {
    margin-top: -235%;
  }

  @media (max-width: 500px) {
    margin-top: -260%;
  }

  @media (max-width: 383px) {
    visibility: hidden;
  }
`;

const GridBlue = styled.img`
  margin-left: 45%;
  @media (max-width: 767px) {
    float: right;
    height: 60px;
    margin-top: -50%;
    margin-left: 75%;
  }
  @media (max-width: 500px) {
    margin-top: -70%;
  }
  @media (max-width: 383px) {
    visibility: hidden;
  }
`;

const MainGrid = styled.div`
  @media (max-width: 767px) {
    margin: 0 5% 0 15%;
  }
`;

class FAQSection extends Component {
  render() {
    return (
      <Row style={FaqStyle}>
        <Col lg={2} md={1} className="hidden-sm hidden-xs">
          <Zig src={greenZig} />
        </Col>
        <Col lg={8} md={10} sm={12}>
          <MainGrid>
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
                  The event is still a ways away, so check back closer to the
                  hackathon for more information. If you don&#39;t find your
                  question, email us at&nbsp;
                  <a
                    href="mailto:contact@bostonhacks.io"
                    style={{ color: "#3bb9e3" }}
                  >
                    contact@bostonhacks.io
                  </a>
                  .
                </FAQHeaderCopy>
              </Col>
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
                    We expect 450 to 500 hackers from all over North America to
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
                    We want to ensure a positive experience for all
                    participants. We encourage you to read the{" "}
                    <a href={mlhCode}>Code of Conduct</a>.
                  </p>
                </FAQAnswer>
              </Col>
              <Col xs={12} md={4}>
                <FAQEntryTitle>What should I bring?</FAQEntryTitle>
                <FAQAnswer>
                  <p>
                    You should bring your laptop, phone, chargers, toiletries,
                    and optionally a sleeping bag. All food and other
                    accommodations will be taken care of.
                  </p>
                </FAQAnswer>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={4}>
                <FAQEntryTitle>Can we form teams?</FAQEntryTitle>
                <FAQAnswer>
                  <p>
                    Of course you can! We encourage people to work in teams of
                    up to 5 people. You may opt-in to team formation during
                    registration which will match you with an ideal team. You
                    can work alone, but it won’t be the same.
                  </p>
                </FAQAnswer>
              </Col>
              <Col xs={12} md={4}>
                <FAQEntryTitle>Does it cost anything?</FAQEntryTitle>
                <FAQAnswer>
                  <p>
                    BostonHacks is 100% free. You don’t have to spend a dime!
                  </p>
                </FAQAnswer>
              </Col>
              <Col xs={12} md={4}>
                <FAQEntryTitle>
                  Will there be travel reimbursements?
                </FAQEntryTitle>
                <FAQAnswer>
                  <p>
                    We’re handling travel reimbursements on a case-by-case
                    basis. We’re also working on potentially providing busses to
                    regions like New York and Canada.
                  </p>
                </FAQAnswer>
              </Col>
            </Row>
          </MainGrid>
        </Col>
        <Col lg={2} md={1}>
          <Trig src={redTrian} />
        </Col>
        <Row style={{ width: "100%" }}>
          <Circle src={circle} />
          <GridBlue src={grid} />
        </Row>
        <Row
          className="hidden-md hidden-lg hidden-xl"
          style={{ width: "100%" }}
        >
          <Zig src={greenZig} />
        </Row>
      </Row>
    );
  }
}

export default FAQSection;
