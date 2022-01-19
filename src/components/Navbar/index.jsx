import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza..
        <Bars /></NavLink>
        <NavIcon>
        </NavIcon>
      </Nav>
    </>
  );
};
export default Navbar;
