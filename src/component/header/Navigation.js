import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";


const Navigation = () =>{
    return(

        <Navbar>
            <div className="container" >
                <NavbarBrand href="/">Restaurant</NavbarBrand>
            </div>
        </Navbar>
    );
}

export default Navigation;