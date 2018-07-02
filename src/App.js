import React, { Component } from "react";
import { AttendBox, SponsorBox } from "./components";
import { Header } from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: "100vh" }}>
          <h2 style={{ position: "fixed" }}> Site Header goes here!</h2>
          <div>
            <h1>BostonHacks!</h1>
            <h2>
              <Header
                contentProp="November 10th-November 11th"
                colorProp="#FFFFFF"
                backgroundProp="#3dbecd"
              />
            </h2>
            <h2>
              <Header
                contentProp="Boston University"
                colorProp="#FFFFFF"
                backgroundProp="#3dbecd"
              />
            </h2>
          </div>
          <div>
            <AttendBox />
            <SponsorBox />
          </div>
        </div>

        <div>
          <h2>
            <Header
              contentProp="Event Schedule"
              colorProp="#EF833F"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <p>Schedule stuff here!</p>
        </div>

        <div>
          <h2>
            <Header
              contentProp="Tracks and Workshops"
              colorProp="#B7D98B"
              backgroundProp="#3dbecd"
            />
          </h2>
          <p>Tracks and workshop stuff here!</p>
        </div>

        <div>
          <h2>
            <Header
              contentProp="Frequently Asked Questions"
              colorProp="#3CBFCE"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <p>FAQ stuff here!</p>
        </div>

        <div>
          <h2>
            <Header
              contentProp="The Footer"
              colorProp="#FFFFFF"
              backgroundProp="#3dbecd"
            />
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
