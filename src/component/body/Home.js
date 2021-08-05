import React, { Component } from "react";
import Loding from "./Loding.js";

class Home extends Component{

    render(){
        document.title = "Restaurant";
        return(
            <div>
                <Loding />
            </div>
        );
    }
}

export default Home;