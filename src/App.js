import React, { Component } from "react";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  Navbar,
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
          <Navbar />
          <div className="headerbar">
            <HeroText
              title="Boston"
              titleBold="Hacks"
              date="November 10th - November 11th"
              location="Boston University"
            />
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
