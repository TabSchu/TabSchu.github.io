import React, { Component } from 'react'
import Favoriten from "./Favoriten"
import Merkliste from "./Merkliste"
import EditProfil from "./EditProfil"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import HeaderBarProfilEdit from './HeaderBarProfilEdit';
import ProfilBearbeitenIcon from './img/profilBearbeiten.png';
import ProfilnameHook from './hooks/ProfilnameHook';
import config from "./config";


class HeaderBarMyZphere extends Component {

   
    render() {

        let fetch_url_profilname = config.basisURL+"/userData"
        return(
        
       
        
            
            <div id="HeaderBarMyZphere">
               <ul>
                   <p><ProfilnameHook fetch_url = {fetch_url_profilname} /></p>
                   
                   <p><Link to="/editProfil"><img src={ProfilBearbeitenIcon} /></Link></p>
                   
                   <li><NavLink to="/merkliste" exact className="main-nav" activeClassName="active"  style={{textDecoration: 'none', color: 'white'}}>Merkliste</NavLink></li>
                   <li><NavLink to ="/favoriten" exact className="main-nav2" activeClassName="active" style={{textDecoration: 'none', color: 'white'}}>Favoriten</NavLink></li>
               </ul>
            </div>
            
            
        )
    }
}

export default HeaderBarMyZphere