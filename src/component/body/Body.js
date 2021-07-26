import React from"react";
import Menu from "./Menu.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { Route } from "react-router-dom";

const Body = () => {
    return(
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
        </div>
    );
}

export default Body;