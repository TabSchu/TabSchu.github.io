import React, { Component, useState } from 'react'
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
  import Maria from './img/maria2.png'
  
import InhaltHook from './hooks/InhaltHook';
  import StoryHook from './hooks/StoryHook';

class Artikel extends Component { 
    constructor(props){
        super(props);
        
        this.showStory=this.showStory.bind(this);
        this.closeStory=this.closeStory.bind(this);
        this.state = {  openStory: false}
    }
    render() {
        let fetch_url_stories = "http://localhost:8080/beitrag";
        let seite;
        if(this.state.openStory){
            seite = <div><InhaltHook showHome={this.closeStory} fetch_url={this.state.url_beitrag}/></div>;
        }else{seite=<div key={this.props.beitrag_id}>
        <div id="banner" style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
            <div id="zurueck"> <img src={Zurueck} onClick={this.props.showHome}/> </div>
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
            {/* <div style={{width:"300px", overflowX:"scroll"}}> */}
            <StoryHook fetch_url={fetch_url_stories}  showInhalt={this.showStory}/>
            {/* </div> */}
        </div>
        </div>}
        return(
            <div>{seite}</div>
        )
    }
    showStory(id_beitrag){
            this.setState({openStory: true,
                url_beitrag:"http://localhost:8080/beitrag/"+id_beitrag,
            });
    }
    closeStory(){
        this.setState({openStory: false});
    }
}

export default Artikel;

 