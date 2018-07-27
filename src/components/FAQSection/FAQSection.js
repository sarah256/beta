import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const FAQEntryTitle = styled.div`
  margin-bottom: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #2fb5e3;
`;

const FAQAnswer = styled.div`
  margin-bottom: 20px
  margin-right: 20px
  font-family: "Roboto Slab", serif;
  font-size: 19px;
  font-weight: 300;
`;

const FAQHeader = FAQEntryTitle.extend`
  font-size: 33px;
  font-weight: 500;
`;

const FAQHeaderCopy = FAQAnswer.extend`
  font-size: 24px;
  font-weight: 400;
`;

const FAQInfo = [
  {
    title: "Where is it?",
    body:
      "George Sherman Union, 2nd Floor in Metcalf Hall at 775 Commonwealth Avenue, Boston, MA, 02215."
  },
  {
    title: "Who’s coming?",
    body:
      "We expect 400 to 450 hackers from all over North America to attend BostonHacks."
  },
  {
    title: "Who can attend?",
    body:
      "All students are welcome. Unfortunately, we will not be able to accommodate students under 18 this year (unless you are a BU student)."
  },
  {
    title: "Do I need experience?",
    body:
      "No experience necessary. We will have plenty of mentors and resources, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks!"
  },
  {
    title: "Are there any rules?",
    body:
      "We want to ensure a positive experience for all participants. We encourage you to read the Code of Conduct."
  },
  {
    title: "What should I bring?",
    body:
      "You should bring your laptop, phone, chargers, toiletries, and optionally a sleeping bag. All food and other accommodations will be taken care of."
  },
  {
    title: "Can we form teams?",
    body:
      "Of course you can! We encourage people to work in teams of up to 5 people. You may opt-in to team formation during registration which will match you with an ideal team. You can work alone, but it won’t be the same."
  },
  {
    title: "Does it cost anything?",
    body: "BostonHacks is 100% free. You don’t have to spend a dime!"
  },
  {
    title: "Will there be travel reimbursements?",
    body:
      "We’re handling travel reimbursements on a case-by-case basis. We’re also working on potentially providing busses to regions like New York and Canada."
  }
];

class FAQSection extends Component {
  render() {
    const rows = [];
    for (var i = 0; i < FAQInfo.length; i++) {
      rows.push(
        <Col sm={12} md={6} lg={4}>
          <FAQEntryTitle> {FAQInfo[i].title} </FAQEntryTitle>
          <FAQAnswer> {FAQInfo[i].body} </FAQAnswer>
        </Col>
      );
    }
    return (
      <Grid fluid>
        <Row>
          <Col className="hidden-md" lg={1} />
          <Col md={12} lg={10}>
            <Row>
              <Col md={12} lg={8} lgOffset={4}>
                <FAQHeader> Frequently Asked Questions </FAQHeader>
                <FAQHeaderCopy>
                  The event is still a ways away, so check back closer to the
                  hackathon for more information.
                </FAQHeaderCopy>
              </Col>
            </Row>
            <Row className="wrap" between="lg">
              {rows}
            </Row>
          </Col>
          <Col className="hidden-md" lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default FAQSection;
