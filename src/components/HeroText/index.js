import React from "react";
import PropTypes from "prop-types";
import "../../index.css";

class HeroText extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Title">{this.props.title}</h1>
        <h1 className="Bold">{this.props.titleBold}</h1>
        <h3 className="Date">{this.props.date}</h3>
        <h3 className="Location">{this.props.location}</h3>
      </div>
    );
  }
}

HeroText.propTypes = {
  title: PropTypes.string,
  titleBold: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string
};

HeroText.defaultProps = {
  title: "Website Title",
  date: "Hackathon Date",
  location: "Location"
};

export default HeroText;
