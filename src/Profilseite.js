import React, { Component, useState } from 'react'
import HeaderBar from "./HeaderBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import SportlerProfil from './img/icon/profil.png'
import BeitragHook from './hooks/BeitragHook';

class Profilseite extends Component { 
    render() {
        let fetch_url = "http://localhost:8080/beitrag";
        return(
            <div>
                <div id="HeaderBarMyZphere" style={{height:"120px"}}>
                    <ul>
                        <p>Maria Schweiger</p>
                        <p><img src={SportlerProfil} style={{height:"50px", width:"auto"}} /></p>
                    </ul>
                </div>
                
                
                <div id="content" style={{position:"absolute", top:"60px"}}> 
                <div id="generelleInfos">   
                {/* <div id="info" style={{height:"125px"}}> */}
                    <h3>Generelle Infos</h3>
                    <ul>
                        <li><img src={SportlerProfil} />1. Deutsche Liga</li>
                        <li><img src={SportlerProfil} />Grün Gold Club Bremen</li>
                    </ul>
                    {/* </div> */}
                </div>            
                    <BeitragHook fetch_url={fetch_url}/>
                </div>
            </div>    
        )
    }
}

export default Profilseite;