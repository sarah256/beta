import React, { Component } from "react";
import {
  AttendBox,
  SponsorBox,
  EventSchedule,
  FAQSection,
  TracksAndWorkshops,
  Footer
} from "./components";
import { Header } from "./components/Header/Header";
import HeroText from "./components/HeroText";
import { FooterBar } from "./components/FooterBar/footerbar";

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
          <FAQSection />
        </div>

        <div className="footerFlair">
          <div className="footer">
            <Footer />
          </div>
        </div>

        <div>
          <FooterBar />
        </div>
      </div>
    );
  }
}

export default App;
