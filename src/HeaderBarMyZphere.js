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
import ProfilBearbeitenIcon from './img/profilBearbeiten.png'

class HeaderBarMyZphere extends Component {

   
    render() {
        return(
        
       
        
            
            <div id="HeaderBarMyZphere">
               <ul>
                   <p>Max Mustermann</p>
                   
                   <p><Link to="/editProfil"><img src={ProfilBearbeitenIcon} /></Link></p>
                   
                   <li><NavLink to="/merkliste" exact className="main-nav" activeClassName="active"  style={{textDecoration: 'none', color: 'white'}}>Merkliste</NavLink></li>
                   <li><NavLink to ="/favoriten" exact className="main-nav2" activeClassName="active" style={{textDecoration: 'none', color: 'white'}}>Favoriten</NavLink></li>
               </ul>
            </div>
            
        )
    }
}

export default HeaderBarMyZphere