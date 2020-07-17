import React, { Component } from 'react'
import ProfilBildIcon from './img/profilMenueleiste.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EditProfil from './EditProfil.js'
  import ProfilnameHook from './hooks/ProfilnameHook';
import config from "./config";

class HeaderBarProfilEdit extends Component{


  


render(){
  let fetch_url_profilname = config.basisURL+"/userData"
    return(
        <div id="HeaderBarProfilEdit">
            <div>
            <ul>
                <Link to="/merkliste"><li> X </li></Link>                
                <h1><ProfilnameHook fetch_url = {fetch_url_profilname} /></h1>
                <h2><img src={ProfilBildIcon}/></h2>
            </ul>

            </div>
        </div>
    )
  }
}


export default HeaderBarProfilEdit;