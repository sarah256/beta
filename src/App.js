import React, { Component } from "react";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  FAQSection,
  TracksAndWorkshops,
  Flair
} from "./components";
import { Header } from "./components/Header/Header";
import HeroText from "./components/HeroText";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="hero-background">
            <div className="headerbar">
              <HeroText
                title="Boston"
                titleBold="Hacks"
                date="November 10th - November 11th"
                location="Boston University"
              />
            </div>
          </div>

          <Flair type="squiggle" />

          <AttendAndSponsorBoxes />

          <EventSchedule />

          <TracksAndWorkshops />

          <FAQSection />

          <Header
            contentProp="The Footer"
            colorProp="#FFFFFF"
            backgroundProp="#3dbecd"
          />
        </div>
      </div>
    );
  }
}

export default App;
