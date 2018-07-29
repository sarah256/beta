import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #5b5480;
  display: flex;
  color: white;
  position: fixed;
  width: 100vw;
  z-index: 999999;
`;

const LinkContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  flex: 1;
  li {
    text-transform: uppercase;
    color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.active {
    color: #928aa7;
    border-bottom: 3px solid #928aa7;
  }
`;

// Active link color: #928aa7

class Navbar extends Component {
  render() {
    return (
      <Container>
        <div>
          <p>Logo goes here</p>
          <p>Social icons here</p>
        </div>
        <LinkContainer>
          <li className="navLink active">Home</li>
          <li className="navLink">History</li>
          <li className="navLink">About+Contact</li>
          <li className="navLink">Workshops</li>
        </LinkContainer>
      </Container>
    );
  }
}

export default Navbar;
