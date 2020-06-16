import React, { Component } from 'react'
import Beitrag from "./Beitrag";
import BeitragHook from "./beitragHook";
import HeaderBar from "./HeaderBar";



class Home extends Component {

    render() {
        return(
            <div>
                <HeaderBar/>
            <div id="content">
                <div>
                    <BeitragHook />
                </div>

            </div>
           </div>
           
        )
    }
}

export default Home;