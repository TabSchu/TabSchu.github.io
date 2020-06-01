import React, { Component } from 'react'
import Beitrag from "./Beitrag";
import TestHook from "./testHook";
import HeaderBar from "./HeaderBar";



class Home extends Component {

    render() {
        return(
            <div>
                <HeaderBar/>
            <div id="content">
                <div>
                {/* *ng For */}
                <TestHook />
                <Beitrag />
                <Beitrag />
                <Beitrag />
                </div>

            </div>
           </div>
           
        )
    }
}

export default Home;