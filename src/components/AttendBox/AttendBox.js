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

  handleSubmit = e => {
    // TODO: MAKE IT MORE REACT/CLEAR FORM
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
        <div>
          <form
            action="https://bostonhacks.us18.list-manage.com/subscribe/post?u=f6d6fee90aa63339dffc8ccca&amp;id=8873714a91"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <Row>
              <Col md={6} xs={6}>
                <EmailField
                  type="email"
                  name="EMAIL"
                  value={this.state.userEmail}
                  onChange={this.handleChange}
                  className="email form-control"
                  id="mce-EMAIL"
                  placeholder="hacker@anyschool.edu"
                  required
                />
              </Col>
              <Col md={6} xs={6}>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_13cd178ce59e4de2a1ecb4265_1954f2ac95"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <SubscribeButton
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button btn btn-outline-danger"
                  >
                    Subscribe
                  </SubscribeButton>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default AttendBox;
