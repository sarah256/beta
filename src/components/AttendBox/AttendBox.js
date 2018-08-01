import React, { Component, Fragment } from "react";
import Header from "../Header";

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
        <Header contentProp="Attend" colorProp="#2fb5e3" />
        <p>
          Thanks for the interest! Leave your email address below or follow us
          on social media to get notified when there is more information and
          registration opens!
        </p>
        <div>
          <input
            value={this.state.userEmail}
            onChange={this.handleChange}
            placeholder="hacker@anyschool.edu"
          />
          <button
            style={{ backgroundColor: "#2fb5e3" }}
            onClick={this.handleClick}
          >
            Subscribe
          </button>
          {this.state.showInvalidEmailText ? <InvalidEmailText /> : null}
        </div>
      </Fragment>
    );
  }
}
export default AttendBox;
