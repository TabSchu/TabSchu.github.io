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


class NavBarMerkliste extends Component {

    render() {
        const navStyle = {
            opacity: 0.5
        }
        
        
        return(
            <div id="navBar">
                <ul>
                    <li><Link style={navStyle}  to="/">
                    <img src={zphereLogo} />  
                    </Link> 
                    </li>
                    <li>
                    <Link style={navStyle} to="/explore" onClick = {this.aktiveUrl}>
                    <img src={ExploreIcon} />
                    </Link>
                    </li>
                    <li>
                    <Link  to="/merkliste" onClick = {this.aktiveUrl}>
                    <img src={ProfilbildIcon} /> 
                    </Link>
                    </li>
                
                </ul>
            </div>
        
        )
    }
}

export default NavBarMerkliste;