import React, { Component } from 'react'
import HeaderBarMerkliste from './HeaderBarMerkliste'
import Merkliste from './Merkliste';

class MyZphere extends Component {

    render() {
        return(
            <div>
                <HeaderBarMerkliste/>
                <div id="content">
                    <h1>MyZphere</h1>
                    <Merkliste/>
                </div>
            </div>
        )
    }
}

export default MyZphere;