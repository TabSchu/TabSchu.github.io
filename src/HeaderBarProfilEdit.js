import React, { Component } from 'react'
import ProfilBildIcon from './img/profilMenueleiste.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class HeaderBarProfilEdit extends Component{




render(){
    return(
        <div id="HeaderBarProfilEdit">
            <div>
            <ul>
                <Link to="/merkliste"><li> X </li></Link>
                <li>fertig</li>
                <h1>Max Mustermann</h1>
                <h2><img src={ProfilBildIcon}/></h2>
            </ul>

            </div>
        </div>
    )
  }
}


export default HeaderBarProfilEdit;