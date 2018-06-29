import React, { Component, Fragment } from "react";
import Header from "../Header";

class AttendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ""
    };
  }

  handleChange = e => {
    this.setState({ userEmail: e.target.value });
  };

  handleClick = e => {
    // TODO: Actually add users to the mailing list
    console.log("The email ", this.state.userEmail, " was just entered!");
    e.preventDefault();
    this.setState({ userEmail: "" });
  };

  render() {
    return (
      <Fragment>
        <Header
          contentProp="Attend"
          colorProp="#9974AD"
          backgroundProp="#FFFFFF"
        />
        <p>
          Thanks for the interest! Leave your email address below or follow us
          on social media to get notified when there is more information and
          registration opens!
        </p>
        <div>
          <input
            value={this.state.userEmail}
            onChange={this.handleChange}
            placeholder="Join our mailing list!"
          />
          <button onClick={this.handleClick}>Do it</button>
        </div>
      </Fragment>
    );
  }
}
export default AttendBox;
