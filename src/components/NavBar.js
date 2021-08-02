import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./css/navbar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navvy">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"  className="navvy-bar">Exhibition Go-er</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Exhibitions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/togo">
                To-Go List
              </NavLink>
            </NavItem>
           
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
