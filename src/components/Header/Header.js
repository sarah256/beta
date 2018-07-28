import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 400;
  margin: 0;
`;

export class Header extends Component {
  render() {
    return (
      <div style={{ background: this.props.backgroundProp }}>
        <Div style={{ color: this.props.colorProp }}>
          {this.props.contentProp}
        </Div>
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
