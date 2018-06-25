import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  height: 100%;
  width: 100%;
  font-family: .SFNSDisplay;
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
  backgroundProp: "#3dbecd"
};

export default Header;
