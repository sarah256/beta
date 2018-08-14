import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import axios from "axios";

const FlashMessage = props => {
  return <p style={{ color: props.color }}> {props.text} </p>;
};

const FormInput = styled.div`
  margin: 20px 0;
  label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
  }
  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    background-color: #f2f2f2;
  }
  textarea {
    border-style: double;
    border-width: 2px;
    min-height: 150px;
    resize: none;
  }
`;

export class ContactFormBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      subject: "",
      email: "",
      message: "",
      flash: []
    };
  }

  clearInput = () => {
    this.setState({ full_name: "" });
    this.setState({ subject: "" });
    this.setState({ email: "" });
    this.setState({ message: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    // let btoa = function(str) {
    //   return Buffer.from(str).toString("base64");
    // };
    e.preventDefault();

    let isValidEmail = this.state.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );

    if (isValidEmail && this.state.full_name && this.state.message) {
      // TODO: SUBMIT THE FORM, NOT YET WORKING

      this.clearInput();
      this.setState({
        flash: [["green", "Form submitted Successfully"]]
      });
    } else {
      this.setState({ flash: [] });
      if (!isValidEmail) {
        this.setState(prevState => ({
          flash: [
            ...prevState.flash,
            ["red", "Oh no! We couldn't recognize that email. Typo?"]
          ]
        }));

        if (!this.state.full_name || !this.state.message) {
          this.setState(prevState => ({
            flash: [
              ...prevState.flash,
              ["red", "Please fill in required spaces"]
            ]
          }));
        }
      }
    }
  };

  render() {
    return (
      <div>
        <FormInput>
          <label htmlFor="full_name"> Full Name* </label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            value={this.state.full_name}
            onChange={this.handleChange}
          />
        </FormInput>
        <FormInput>
          <label htmlFor="email"> Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormInput>
        <FormInput>
          <label htmlFor="subject"> Subject </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={this.state.subject}
            onChange={this.handleChange}
          />
        </FormInput>
        <FormInput height="150px">
          <label htmlFor="message"> Message* </label>
          <textarea
            type="text"
            name="message"
            id="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </FormInput>
        <button
          style={{ backgroundColor: this.props.color }}
          onClick={this.handleClick}
        >
          Contact Us
        </button>
        {this.state.flash.map((flashMessage, i) => (
          <FlashMessage
            color={flashMessage[0]}
            text={flashMessage[1]}
            key={i}
          />
        ))}
      </div>
    );
  }
}

ContactFormBody.propTypes = {
  color: PropTypes.string
};

FlashMessage.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

export default ContactFormBody;
