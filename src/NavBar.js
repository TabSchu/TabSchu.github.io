import React, { Component } from 'react';
import Home from "./Home";
import Explore from "./Explore";
import Merkliste from "./Merkliste";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Beitrag from './Beitrag';
import HeaderBarMyZphere from './HeaderBarMyZphere';
import zphereLogo from './img/zphere_logo_klein.png'
import ProfilbildIcon from './img/profilMenueleiste.png'
import ExploreIcon from './img/explore_leer.png'

class NavBar extends Component {

    render() {
        return(
            <div id="navBar">
                <ul>
                    <li><Link to="/">
                    <img src={zphereLogo} />  
                    </Link> 
                    </li>
                    <li>
                    <Link to="/explore">
                    <img src={ExploreIcon} />
                    </Link>
                    </li>
                    <li>
                    <Link to="/merkliste">
                    <img src={ProfilbildIcon} /> 
                    </Link>
                    </li>
                
                </ul>
            </div>
        
        )
    }
}

export default NavBar;