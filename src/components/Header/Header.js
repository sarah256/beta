import React, { Component } from "react";
import PropTypes from "prop-types";

export class Header extends Component {
  render() {
    return (
      <div style={{ background: this.props.backgroundProp }}>
        <h3 style={{ color: this.props.colorProp }}>
          {this.props.contentProp}
        </h3>
      </div>
    );
  }
}

Header.propTypes = {
  contentProp: PropTypes.string,
  colorProp: PropTypes.string,
  backgroundProp: PropTypes.string
};

Header.defaultProps = {
  contentProp: "A header should go here",
  colorProp: "#dc4b6a",
  backgroundProp: "#fff"
};

export default Header;
