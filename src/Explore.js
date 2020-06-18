import React, { Component } from 'react'
import HeaderBar from "./HeaderBar";
import Artikel from "./Artikel";


import tutorials_leer from "./img/icon/tutorials_leer.png";
import verletzungen_leer from "./img/icon/verletzungen_leer.png";
import ernaehrung_leer from "./img/icon/ernaehrung_leer.png";
import breakdance_leer from "./img/icon/breakdance_leer.png";
import tipps_leer from "./img/icon/tipps_leer.png";
import tricks_leer from "./img/icon/tricks_leer.png";
import events_leer from "./img/icon/events_leer.png";
import diy_leer from "./img/icon/diy_leer.png";
import diskussionen_leer from "./img/icon/diskussionen_leer.png";
import trends_leer from "./img/icon/trends_leer.png";
import funFacts_leer from "./img/icon/funFacts_leer.png";

import Muelleimer from "./img/icon/Muelleimer.png";
import Zurueck from "./img/icon/Zurueck.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BeitragHook from "./hooks/BeitragHook";
import StoryHook from "./hooks/StoryHook";
import SubSportartHook from "./hooks/SubSportartHook";
import PersonHook from "./hooks/PersonHook";
import ThemenbereichHook from "./hooks/ThemenbereichHook";

class Explore extends Component {


    render() {
        let fetch_url_newest_beitrag = "http://localhost:8080/beitrag/newest";
        let fetch_url_stories = "http://localhost:8080/beitrag";
        let fetch_url_subsportart = "http://localhost:8080/subsportart";
        let fetch_url_person_group = "http://localhost:8080/person";
        let fetch_url_themenbereich = "http://localhost:8080/themenbereich";

        return(
            <Router>
            <div id="explore">
            <HeaderBar/>
            <div id="filterOverlay" >
                    <div id="filterblock">
                        <div id="close"><img src={Zurueck} /></div>
                        <div id="filter">
                            <div id="filterrow">
                                <div className="filtericon">
                                    <img src={tutorials_leer}/>
                                    Tutorials
                                </div>
                                <div className="filtericon">
                                    <img src={verletzungen_leer}/>
                                    Verletzung
                                </div>
                                <div className="filtericon">
                                    <img src={ernaehrung_leer}/>
                                    Ernährung
                                </div>
                                <div className="filtericon">
                                    <img src={breakdance_leer}/>
                                    Break Dance
                                </div>
                            </div>
                            <div id="filterrow">
                                <div className="filtericon">
                                    <img src={tipps_leer}/>
                                    Tipps
                                </div>
                                <div className="filtericon">
                                    <img src={tricks_leer}/>
                                    Tricks
                                </div>
                                <div className="filtericon">
                                    <img src={events_leer}/>
                                    Events
                                </div>
                                <div className="filtericon">
                                    <img src={diy_leer}/>
                                    DIY
                                </div>
                            </div>
                            <div id="filterrow">
                                <div className="filtericon">
                                    <img src={diskussionen_leer}/>
                                    Diskussion
                                </div>
                                <div className="filtericon">
                                    <img src={trends_leer}/>
                                    Trends
                                </div>
                                <div className="filtericon">
                                    <img src={funFacts_leer}/>
                                    Fun Facts
                                </div>
                                <div className="filtericon">
                                    <img src={Muelleimer}/>
                                    Alle löschen
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div id="content">
                    <h3>sportarten</h3>
                    <SubSportartHook  fetch_url={fetch_url_subsportart}/>
                    <h3>sportler</h3>
                    <PersonHook fetch_url={fetch_url_person_group}/>
                    <Link to="/artikel"> <h3>top story</h3></Link>
                    <BeitragHook  fetch_url={fetch_url_newest_beitrag}/>
                    <h3  className="titelThemenbereich" >Themenbereich</h3>
                    <StoryHook fetch_url={fetch_url_stories}/>
                    <ThemenbereichHook fetch_url={fetch_url_themenbereich}/>
                </div>
            </div>
            <Switch> 
                <Route path="/Artikel" component={Artikel} exact>
                    {/* < Artikel/> */}
                </Route>
                <Route path="/">
                    {/* < /> */}
                </Route>
                <Route path="/">
                    {/* < /> */}
                </Route>
            </Switch>
        </Router>
        )
    }
}

export default Explore;