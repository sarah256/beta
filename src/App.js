import React, { Component } from "react";
import { AttendBox, SponsorBox } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: "100vh" }}>
          <h2 style={{ position: "fixed" }}>Header goes here!</h2>

          <div>
            <h1>BostonHacks!</h1>
            <h2>Happening sometime in November, probably!</h2>
            <h2>Boston University</h2>
          </div>

          <AttendBox />
          <SponsorBox />
        </div>

        <div>
          <h2>Event schedule</h2>
          <p>Schedule stuff here!</p>
        </div>

        <div>
          <h2>Tracks and Workshops</h2>
          <p>Tracks and workshop stuff here!</p>
        </div>

        <div>
          <h2>Frequently Asked Questions</h2>
          <p>FAQ stuff here!</p>
        </div>

        <h2>Footer goes here!</h2>
      </div>
    );
  }
}

export default App;
