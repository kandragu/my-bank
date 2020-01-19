import * as React from "react";

import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 0.7em;
  justify-content: space-around;
`;

const Navigation = styled.nav`
  cursor: pointer;
  color: #fff;
  font-size: 2em;
  border-radius: 4px;
  border: 1px solid #bbb;
  transition: all 0.3s linear;

  background: #7abcff; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #7abcff),
    color-stop(44%, #60abf8),
    color-stop(100%, #4096ee)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* IE10+ */
  background: linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #4096ee 100%
  ); /* W3C */

  position: fixed;
  top: 0;
  width: 100%;

  &:hover {
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }
`;

export interface NavProps {}

const Nav: React.SFC = () => {
  return (
    <Navigation>
      <NavList>
        <li>
          {" "}
          <a href="MyBank"> MyBank</a>
        </li>
        <li>
          {" "}
          <a href=""> Account</a>
        </li>
        <li>
          {" "}
          <a href=""> Investment </a>
        </li>
        <li>
          {" "}
          <a href=""> Contacts</a>
        </li>
      </NavList>
    </Navigation>
  );
};

export default Nav;
