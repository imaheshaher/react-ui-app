import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarJs = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="row">
      
        <NavbarBrand className="col" href="/">Drop</NavbarBrand>
              
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto col" navbar>
              <div className="row">
            <NavItem className="col">
                About
            </NavItem>
            <NavItem className="col">
                About
            </NavItem>
            <NavItem className="col">
                About
            </NavItem>
            </div>
            </Nav>
            <Nav className="mr-auto col" navbar>
                <NavItem>
                    <Button color="primary">Upload</Button>
                </NavItem>
            </Nav>
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarJs;