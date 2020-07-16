import React, { Component, useState } from 'react'
import HeaderBar from "./HeaderBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import SportlerProfil from './img/icon/profil.png'
  import MerklisteIcon from './img/icon/Merkliste_leer.png'
  import TeilenIcon from './img/icon/Teilen.png'
  import Zurueck    from './img/icon/Zurueck.png'
  import StoryHook from "./hooks/StoryHook";
  import Play from './img/icon/Play.png'

class Video extends Component {
    constructor(props){
        super(props);
    } 
    render() {
        let fetch_url_stories = "http://localhost:8080/beitrag";
        return(
            <div  key={this.props.beitrag_id}>
            <div id="banner" style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
                <div id="zurueck"> <img src={Zurueck} onClick={this.props.showHome}/></div>
                <img style={{height:"70px",opacity:"0.8", margin:"auto", position:"absolute", top:"65px", left:"calc(50vw - 31px)"}} src={Play}/>
            </div>
            <div id="contentArtikel" >                
                <div id="titel">
                    <h5>{this.props.kategorie}</h5>
                    <h3>{this.props.titel}</h3>
                </div>
                <div id="autor"><img src={SportlerProfil}/> Team zphere <div className="icon"> <img src={TeilenIcon}/> <img src={MerklisteIcon}/>  </div></div>
                <div id="text">{this.props.text}
                    </div>
                <div id="info">
                    <div id="hashtag">#Meister #tanzen</div>
                    <h3>Generelle Infos</h3>
                    <ul>
                        <li><img src={SportlerProfil} className="center" align="middle" />1. Deutsche Liga</li>
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

export default Video;