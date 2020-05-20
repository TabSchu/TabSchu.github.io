import React, { Component } from 'react'
import Beitrag from "./Beitrag";

class Home extends Component {

    render() {
        return(
            <div id="content">
                <div>
                {/* *ng For */}
                <Beitrag />
                <Beitrag />
                <Beitrag />
                </div>
            </div>
        )
    }
}

export default Home;