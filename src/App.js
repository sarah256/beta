import React, { Component } from "react";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  // Navbar,
  FAQSection,
  HeroText,
  TracksAndWorkshops,
  Footer,
  FooterBar
} from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <a name="top" />
        <div className="App">
          <HeroText
            title="Boston"
            titleBold="Hacks"
            date="November 10th - November 11th"
            location="Boston University"
          />

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
