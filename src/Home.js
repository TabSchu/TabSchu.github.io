import React, { Component } from 'react'
import Beitrag from "./Beitrag";
import TestHook from "./testHook";

class Home extends Component {

    render() {
        return(
            <div id="content">
                <div>
                {/* *ng For */}
                <TestHook />>
                <Beitrag />
                <Beitrag />
                <Beitrag />
                </div>
            </div>
        )
    }
}

export default Home;