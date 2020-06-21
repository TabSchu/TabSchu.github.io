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
    this.state = {isToggleOn: true};
    this.displayFilter = this.displayFilter.bind(this);
    this.filterclose = this.filterclose.bind(this);
    this.state = {onfilter: false};
}

displayFilter() {
    this.setState({onfilter: true});
}

filterclose(){
    // document.getElementById("filterOverlay").style.display="none";
    this.setState({onfilter: false});
    console.log("close")
}
    render() {
        let fetch_url = "http://localhost:8080/beitrag";
        let fetch_url_latein_artikel = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Artikel";
        let fetch_url_latein_video = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Video";
        let fetch_url_latein_podcast = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Podcast";
        return(
            <div>
                <div id="headerBar">
                    <ul>
                        <li><img src={Zurueck} style={{}}/></li>                    
                        <li>Themengebiet</li>
                        <li></li>
                    </ul>
                </div>
                <div id="Beitragsart">
                    <ul>
                        <li><Link to="/themengebiet/podcast"><p> Podcast </p></Link> </li>                    
                        <li><Link to="/themengebiet/artikel"><p> Artikel </p></Link> </li>
                        <li><Link to="/themengebiet/video"><p> Video </p></Link> </li>
                    </ul>
                </div>
                {/* <BeitragPodcast /> */}
                {/* <BeitragPodcast /> */}
                {/* <BeitragPodcast /> */}
                <div id="content" style={{marginTop: "80px"}}>
                    <BeitragPodcast />
                    <BeitragPodcastHook fetch_url={{ fetch_url_latein_podcast}}/>
                    {/* <BeitragHook fetch_url={{fetch_url_latein_artikel}}/>  */}
                    {/*  fetch_url*/}
                    
                </div>
           </div>           
        )
    }
}
export default Themengebiet;