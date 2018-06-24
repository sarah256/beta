import React, { Component, Fragment } from "react";
import { Header } from "./components/Header/Header";


class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <div style={{ height: "100vh" }}>
          <h2> Site Header goes here!</h2>
        </div>
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
          <h2>
            <Header
              contentProp="Attend"
              colorProp="#9974AD"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <p>Attend subtext goes here</p>
          <p>Email field goes here</p>
          <h2>
            <Header
              contentProp="Sponsor"
              colorProp="#dc4b6a"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <p>Sponsor subtext goes here</p>
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
              contentProp="Frequently"
              colorProp="#3CBFCE"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <p>FAQ stuff here!</p>
        </div>

        <h2>
          <Header
            contentProp="The Footer"
            colorProp="#FFFFFF"
            backgroundProp="#3dbecd"
          />
        </h2>
      </Fragment>
    );
  }
}

export default App;
