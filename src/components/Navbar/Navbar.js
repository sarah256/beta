import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/Logos/Logo-Small_header.svg";
import FacebookLogo from "../../assets/Logos/fb.svg";
import TwitterLogo from "../../assets/Logos/Twitter.svg";

const Container = styled.div`
  background-color: #5b5480;
  color: white;
  position: fixed;
  width: 100vw;
  z-index: 999999;
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;

  div {
    flex: 1;
  }

  div.logos {
    padding: 10px;
    display: flex;
    align-items: center;

    * {
      margin: 0 10px 0 10px;
    }
  }
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  a {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    height: 100%;
    width: 100%;
  }

  li.active {
    a {
      color: #928aa7;
    }
    border-bottom: 5px solid #928aa7;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <div className="logos">
            <a href="#">
              <img src={Logo} />
            </a>
            <a href="https://www.facebook.com/bostonhacks/">
              <img src={FacebookLogo} />
            </a>
            <a href="https://twitter.com/boston_hacks">
              <img src={TwitterLogo} />
            </a>
          </div>
          <LinkContainer>
            <li className="navLink active">
              <a href="#">Home</a>
            </li>
            <li className="navLink">
              <a href="https://museo.bostonhacks.io/">Museo</a>
            </li>
            <li className="navLink">
              <a href="#">Contact</a>
            </li>
          </LinkContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Navbar;
