import React, { Component } from "react";
import {
  AttendBox,
  SponsorBox,
  EventSchedule,
  FAQSection,
  TracksAndWorkshops
} from "./components";
import { Header } from "./components/Header/Header";
import HeroText from "./components/HeroText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Flair">
          <div className="headerbar">
            <HeroText
              title="Boston"
              titleBold="Hacks"
              date="November 10th - November 11th"
              location="Boston University"
            />
          </div>
        </div>
        <div>
          <AttendBox />
          <SponsorBox />
        </div>
        <div>
          <h2>
            <Header
              contentProp="Event Schedule"
              colorProp="#EF833F"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <EventSchedule />
        </div>

        <div>
          <TracksAndWorkshops />
        </div>

        <div>
          <h2>
            <Header
              contentProp="Frequently Asked Questions"
              colorProp="#3CBFCE"
              backgroundProp="#FFFFFF"
            />
          </h2>
          <FAQSection />
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
