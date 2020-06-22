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

constructor(props){
    super(props);
    this.aktiveUrl = this.aktiveUrl.bind(this);
    this.state = {
        url: "Home"
    };
}

aktiveUrl(e){
    
    
    this.setState({ url: e})
    console.log(e)
}


    render() {
        const navStyle = {
            opacity: 0.5
        }

        let url = this.state.url;

        let NavBarHighlight;

        let NavBarHome = false;
        let NavBarExplore = false;
        let NavBarMerkliste = false;

        if (url = "Home") {

            this.NavBarHome = true;

        } else if ( url = "Explore"){

            this.NavBarExplore = true;
        } else if (url = "Merkliste"){

            this.NavBarMerkliste = true;
        }



        
        
            
        

        
        return(

        
                <div id="navBar">
                 <ul>
            
                <li><Link   to="/" onClick ={() => this.aktiveUrl("Home")}>
                <img src={zphereLogo} />  
                </Link> 
                </li>
                <li>
                <Link style={navStyle} to="/explore" onClick = {() => this.aktiveUrl("Explore")}>
                <img src={ExploreIcon} />
                </Link>
                </li>
                <li>
                <Link style={navStyle}  to="/merkliste" onClick = {() => this.aktiveUrl("Merkliste")}>
                <img src={ProfilbildIcon} /> 
                </Link>
                </li>
            
            </ul>
        </div>

        
            
        
        )
    }
}

export default NavBar;