import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">DivSkills</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          
            <Nav className="ml-auto" navbar>

            <NavItem>
                <NavLink href="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/geomancer">Geomancer&emsp;</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/huntsman">Huntsman&emsp;</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/hydrosophist">Hydrosophist&emsp;</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/necromancer">Necromancer&emsp;</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/polymorph">Polymorph&emsp;</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/pyrokinetic">Pyrokinetic&emsp;</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/scoundrel">Scoundrel&emsp;</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/summoning">Summoning&emsp;</NavLink>
            </NavItem>           
            
            <NavItem>
                <NavLink href="/warfare">Warfare&emsp;</NavLink>
            </NavItem>
              

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}





              /* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */

