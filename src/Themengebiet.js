import React, { Component } from 'react'
import BeitragHook from "./hooks/BeitragHook";
import BeitragPodcastHook from "./hooks/BeitragPodcastHook";
import Zurueck from "./img/icon/Zurueck.png";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BeitragPodcast from './BeitragPodcast';

import AudioIcon from './img/icon/Audio.png'
import MerklisteIcon from './img/icon/Merkliste_leer.png'
import TeilenIcon from './img/icon/Teilen.png'


class Themengebiet extends Component {
constructor(props){
    super(props);
    this.state = {showArtikel: true,
                  showPodacst: false,
                  showVideo: false,  
                    };
    this.changeBeitragVideo = this.changeBeitragVideo.bind(this);
    this.changeBeitragPodcast = this.changeBeitragPodcast.bind(this);
    this.changeBeitragArtikel = this.changeBeitragArtikel.bind(this);
}

    render() {
 
     
        let fetch_url = "http://localhost:8080/beitrag";
        let fetch_url_latein_artikel = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Artikel";
        let fetch_url_latein_video = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Video";
        let fetch_url_latein_podcast = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Podcast";
        
        let beitrag;
        let beitragArt;
        // =<BeitragHook fetch_url={fetch_url_latein_artikel}/>;
        if(this.state.showArtikel){
            beitrag = <BeitragHook fetch_url={fetch_url_latein_artikel}/>
            
            beitragArt= 
            <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast}><p> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel}><p style={{borderBottom:"2px solid #00B3A6"}}> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo}><p> Video </p></li>
                    </ul>
                </div>
    }
        if(this.state.showPodacst){
            beitrag = <BeitragPodcastHook fetch_url={ fetch_url_latein_podcast}/>
            beitragArt= 
            <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast} ><p style={{borderBottom:"2px solid #00B3A6"}}> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel} ><p> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo}><p> Video </p></li>
                    </ul>
                </div>
    }
        if(this.state.showVideo){
            beitrag = <BeitragHook fetch_url={fetch_url_latein_video}/>
            beitragArt= 
            <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast}><p> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel}><p> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo} ><p style={{borderBottom:"2px solid #00B3A6"}}> Video </p></li>
                    </ul>
                </div>
    }

        return(
            <div>
                <div id="headerBar">
                    <ul>
                        <li style={{justifyContent:"flex-start"}}><img src={Zurueck} 
                        onClick={this.props.parentShallShowThemengebiet}
                            style={{marginLeft: "15px"}}/></li>                    
                        <li>Latein</li>
                        <li></li>
                    </ul>
                </div>
                {beitragArt}
                {/* <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast}><p> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel}><p> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo}><p> Video </p></li>
                    </ul>
                </div> */}

                <div id="content" style={{marginTop: "80px"}}>
                    {beitrag}
                </div>
           </div>           
        )
    }
            
changeBeitragArtikel (){
    // this.setState({showBeitrag:});
    this.setState({showArtikel: true});
    this.setState({showPodacst: false});
    this.setState({showVideo: false});
    // console.log(" changeBeitragArtikel")
}   
changeBeitragVideo () {
    this.setState({showArtikel: false});
    this.setState({showPodacst: false});
    this.setState({showVideo: true});
    // this.setState({showBeitrag:});
    // console.log(" changeBeitragVideo")
}   
changeBeitragPodcast () {
    this.setState({showArtikel: false});
    this.setState({showPodacst: true});
    this.setState({showVideo: false});
    // this.setState({showBeitrag:});
    // console.log(" changeBeitragPodcast")
}  
}
export default Themengebiet;