import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 400;
`;

export class Header extends Component {
  render() {
    return (
      <Div style={{ background: this.props.backgroundProp }}>
        <h3 style={{ color: this.props.colorProp }}>
          {this.props.contentProp}
        </h3>
      </Div>
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
