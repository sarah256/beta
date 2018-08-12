import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

const SubscribeButton = styled.button`
  background-color: #2fb5e3;
  box-sizing: border-box;
`;

const EmailField = styled.input`
  width: 76%;
  @media (max-width: 500px) {
    width: 67%;
  }
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
  color: #2fb5e3;
  @media (max-width: 500px) {
    font-size: 1.56em;
  }
`;

const InvalidEmailText = () => (
  <p style={{ color: "red" }}>
    Oh no! We couldn&#39;t recognize that email. Typo?
  </p>
);

class AttendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      showInvalidEmailText: false
    };
  }

  handleChange = e => {
    this.setState({ userEmail: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();

    // Regex magic, checks whether the user entered a valid email format
    let isValidEmail = this.state.userEmail.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );

    if (isValidEmail) {
      // TODO: Add users to the mailing list here
      this.setState({ userEmail: "", showInvalidEmailText: false });
    } else {
      this.setState({ showInvalidEmailText: true });
    }
  };

  render() {
    return (
      <Fragment>
        <Title>Attend</Title>
        <Text>
          Thanks for the interest! Leave your email address below or follow us
          on social media to get notified when there is more information and
          registration opens!
        </Text>
        <Row>
          <Col md={6} xs={6}>
            <EmailField
              value={this.state.userEmail}
              onChange={this.handleChange}
              placeholder="hacker@school.edu"
            />
          </Col>
          <Col md={6} xs={6}>
            <SubscribeButton onClick={this.handleClick}>
              Subscribe
            </SubscribeButton>
          </Col>
          {this.state.showInvalidEmailText ? <InvalidEmailText /> : null}
        </Row>
      </Fragment>
    );
  }
}
export default AttendBox;
