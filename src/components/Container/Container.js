import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  background: #3dbecd;
  height: 100%;
  width: 100%;
`;

class Container extends Component {
  render() {
    return (
      <Div>
        <h1>hi</h1>
      </Div>
    );
  }
}

export default Container;
