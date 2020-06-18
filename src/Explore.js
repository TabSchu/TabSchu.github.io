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

class Explore extends Component {


    render() {
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
                    
                    <div className="middleBlock">
                        <div className="middleBox">
                            <div className="boxcontent"><Link to="/artikel">
                            <h4>Breakdance</h4></Link>
                            </div>
                        </div>
                        <div className="middleBox">
                            <div className="boxcontent">
                            <h4>Breakdance</h4>
                            </div>
                        </div> 
                        <div className="middleBox">
                            <div className="boxcontent">
                            <h4>Breakdance</h4>
                            </div>
                        </div> 
                        <div className="middleBox">
                            <div className="boxcontent">
                            <h4>Breakdance</h4>
                            </div>
                        </div>     
                    </div>
                    <h3>sportler</h3>
                    <div className="smallBlock">
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div>
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div>
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                    </div>
                    <h3>top story</h3>
                    <div className="bigBlock">
                        <div className="bigBox">
                                <h4>Background Story</h4>
                        </div>
                    </div>
                    <div className="stories">
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div>                 
                    </div>
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