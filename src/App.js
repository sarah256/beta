import React, { Component, Fragment } from "react";
import { EventSchedule, FAQSection } from "./components";

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <div style={{ height: "100vh" }}>
          <h2 style={{ position: "fixed" }}>Header goes here!</h2>

          <div>
            <h1>BostonHacks!</h1>
            <h2>Happening sometime in November, probably!</h2>
            <h2>Boston University</h2>
          </div>

          <h2>Attend</h2>
          <p>Attend subtext goes here</p>
          <p>Email field goes here</p>
          <h2>Sponsor</h2>
          <p>Sponsor subtext goes here</p>
        </div>

        <div>
          <EventSchedule />
        </div>

        <div>
          <h2>Tracks and Workshops</h2>
          <p>Tracks and workshop stuff here!</p>
        </div>

        <div>
          <FAQSection />
        </div>

        <h2>Footer goes here!</h2>
      </Fragment>
    );
  }
}

export default App;
