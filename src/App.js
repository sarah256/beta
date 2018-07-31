import React, { Component } from "react";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  FAQSection,
  TracksAndWorkshops,
  Footer
} from "./components";
// import { Header } from "./components/Header/Header";
import HeroText from "./components/HeroText";
import { FooterBar } from "./components/FooterBar/footerbar";

class App extends Component {
  render() {
    return (
      <div>
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

          <AttendAndSponsorBoxes />

          <EventSchedule />

          <TracksAndWorkshops />

          <FAQSection />

          <div className="footerFlair">
            <div className="footer">
              <Footer />
            </div>
          </div>

          <div>
            <FooterBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
