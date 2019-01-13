import React from 'react';

import magic from './icons/magic.png';

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
          <NavbarBrand href="/">
            <img className="img-logo" src={magic} alt="magic"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          
            <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            {/* <NavItem>
                <NavLink href="/aerotheurge">Aerotheurge</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/geomancer">Geomancer</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/huntsman">Huntsman</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/hydrosophist">Hydrosophist</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/necromancer">Necromancer</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/polymorph">Polymorph</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/pyrokinetic">Pyrokinetic</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="/scoundrel">Scoundrel</NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink href="/summoning">Summoning</NavLink>
            </NavItem>           
            
            <NavItem>
                <NavLink href="/warfare">Warfare</NavLink>
            </NavItem> */}

            
              

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

