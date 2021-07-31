import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";


class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () =>{
        console.log("dkfhahfoia ");
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <Navbar dark color="dark" expand="sm">
                <div className="container" >
                    <NavbarBrand href="/">Restaurant</NavbarBrand>

                    <NavbarToggler onClick={this.navToggle}/>

                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/home" className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Navigation;