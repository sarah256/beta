import React, { Component } from "react";
import { ContactForm, FooterBar, ContactFoot, ContactHead } from "./components";
import "./contact.css";

// import headwave from "./assets/Waves/ConactHead.svg";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div>
          <ContactHead />
        </div>
        <ContactForm />
        <ContactFoot />
        <FooterBar />
      </div>
    );
  }
}

export default ContactPage;
