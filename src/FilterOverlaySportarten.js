import React, { Component } from 'react';



import Muelleimer from "./img/icon/Muelleimer.png";
import Zurueck from "./img/icon/Zurueck.png";
import Tanzen_leer from "./img/icon/Tanzen_leer.png";
import Parkour_leer from "./img/icon/Parkour_leer.png";
import Golf_leer from "./img/icon/Golf_leer.png";
import Kampf_leer from "./img/icon/Kampf_leer.png";
import Reiten_leer from "./img/icon/Reiten_leer.png";
import Tischtennis_leer from "./img/icon/Tischtennis_leer.png";
import Volleyball_leer from "./img/icon/Volleyball_leer.png";

class FilterOverlaySportarten extends Component {
    render() {
        return(
            <div id="filterOverlay"
                // style={{display: this.state.displayFilter ? 'block' : 'none' }} {/*onClick={this.filterclose()}*/}
            >
                <div id="filterblock">
                    <div id="close"><img src={Zurueck} onClick={this.props.parentShallHideSportFilter} /></div>
                    <div id="filter">
                        <div id="filterrow">
                            <div className="filtericon">
                                <img src={Tanzen_leer}/>
                                Tanzen
                            </div>
                            <div className="filtericon">
                                <img src={Parkour_leer}/>
                                Parkour
                            </div>
                            <div className="filtericon">
                                <img src={Golf_leer}/>
                                Golf
                            </div>
                            <div className="filtericon">
                                <img src={Kampf_leer}/>
                                Kampfsport
                            </div>
                        </div>
                        <div id="filterrow">
                            <div className="filtericon">
                                <img src={Reiten_leer}/>
                                Reiten
                            </div>
                            <div className="filtericon">
                                <img src={Tischtennis_leer}/>
                                Tischtennis
                            </div>
                            <div className="filtericon">
                                <img src={Volleyball_leer}/>
                                Volleyball
                            </div>
                            <div className="filtericon">
                                <img src={Muelleimer}/>
                                Alle löschen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterOverlaySportarten;

/*
*
*
class Beitrag extends Component {

    render() {
        return()
     }
  }
  *

export default Explore;      *
*
*
*
*
*
*
* */