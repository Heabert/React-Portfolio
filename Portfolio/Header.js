import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const navBar = (props) => {

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true
    };
}
toggleNavbar(){
    this.setState({
        collapsed: !this.state.collapsed
    });
}
    render(){
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="#" className="Menu">Menu</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="Menu-list" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>Home</NavItem>
                            <NavItem>About</NavItem>
                            <NavItem>Work</NavItem>
                            <NavItem>Skills</NavItem>
                            <NavItem>Education</NavItem>
                            <NavItem>Contact</NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )

    };
}
export default navBar;