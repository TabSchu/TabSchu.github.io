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
import InhaltHook from './hooks/InhaltHook';
// import data from './img/SurvivalOfTheFittest.mp4'

class Video extends Component {
    constructor(props){
        super(props);
        this.showStory=this.showStory.bind(this);
        this.closeStory=this.closeStory.bind(this);
        this.playVideo=this.playVideo.bind(this);
        this.state = {  openStory: false,
                        openDataVideo:false
        }
    } 
    render() {
        let fetch_url_stories = "http://localhost:8080/beitrag";
        let seite;
        let dataVideo = <div id="banner" style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
        <div id="zurueck"> <img src={Zurueck} onClick={this.props.showHome}/></div>
        <img style={{height:"70px",opacity:"0.8", margin:"auto", position:"absolute", top:"65px", left:"calc(-31px + 375px/2)"}} src={Play} onClick={this.playVideo}/>
    </div>; 
        if(this.state.openDataVideo){
            dataVideo =<div id="banner" style={{backgroundColor:"#212121",backgroundImage: "url()"}}>
                            {/* <video  style={{width:"100%", height:"auto", position:"absolute",top:"0px",left:"0"}} controls> <source src={data}/></video> */}
                            <div id="zurueck"style={{position:"relative", zIndex:"50"}}> <img src={Zurueck} onClick={this.props.showHome}/></div>
                        </div> 
        }
        if(this.state.openStory){
            seite = <div><InhaltHook showHome={this.closeStory} fetch_url={this.state.url_beitrag}/></div>;
        }else{
            seite=<div  key={this.props.beitrag_id}>
              
            {dataVideo}
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
                {/* <div style={{width:"40vh", overflowX:"scroll"}}> */}
                <StoryHook fetch_url={fetch_url_stories} showInhalt={this.showStory}/>
                {/* </div>           */}
            </div>
            </div>
        }
        return(
            <div>{seite}</div>
        )
    }
    playVideo(){
        this.setState({openDataVideo: true,});
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

export default Video;