import React, { Component, useState } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import SportlerProfil from './img/icon/profil.png'
  import MerklisteIcon from './img/icon/Merkliste_leer.png'
  import TeilenIcon from './img/icon/Teilen.png'
  import Zurueck    from './img/icon/Zurueck.png'
  import StoryHook from "./hooks/StoryHook";
  import Kopfhoerer from './img/icon/Kopfhoerer.png'

class Podcast extends Component { 
    render() {
        let fetch_url_stories = "http://localhost:8080/beitrag";
        return(
            <div>
            <div id="banner">
            <div id="zurueck"> <img src={Zurueck} onClick={this.props.showHome}/></div>
                <img style={{height:"70px",opacity:"0.8", margin:"auto", position:"absolute", top:"65px", left:"calc(50vw - 31px)"}} src={Kopfhoerer}/>
            </div>
            <div id="contentArtikel" >                
                <div id="titel">
                    <h5>Breaking News:</h5>
                    <h3>Weltmeisterschaft der Tanz-Formation Latein</h3>
                </div>
                <div id="autor"><img src={SportlerProfil}/> Katharina Schövel<div className="icon"> <img src={TeilenIcon}/> <img src={MerklisteIcon}/>  </div></div>
                <div id="text">
                    Kommentar: Carsten Flügel
                    Moderation: Felix Krömer
                    In einem unkommentierten Livestream auf www.radiobremen.de können Tanzsportbegeisterte die Zwischenrunde ab 20.45 Uhr verfolgen.
                    Das Finale zeigt das NDR/RB-Fernsehen von 23.10 bis 00.15 Uhr.
                    </div>
                <div id="info">
                    <div id="hashtag">#Meister #tanzen</div>
                    <h3>Generelle Infos</h3>
                    <ul>
                        <li><img src={SportlerProfil} className="center" align="middle"/>1. Deutsche Liga</li>
                        <li><img src={SportlerProfil} className="center" align="middle" />Grün Gold Club Bremen</li>
                    </ul>
                    <h3>Ähnliche Beiträge: </h3>
                </div>
                <div style={{width:"40vh", overflowX:"scroll"}}>
                <StoryHook fetch_url={fetch_url_stories}/>
                </div>           
            </div>
            </div>
        )
    }
}

export default Podcast;