import React, { Component } from 'react';

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

class FilterOverlayTags extends Component {
    render() {
        return(
            <div id="filterOverlay" >
                <div id="filterblock">
                    <div id="close"><img src={Zurueck} onClick={this.props.parentShallHideFilter} /></div>
                    <div id="filter">
                        <div id="filterrow">
                            <div className="filtericon">
                                <img id_tag="1" src={tutorials_leer}
                                     onClick={() => this.props.parentShallToggleFilter(1)}
                                />
                                Tutorials
                            </div>
                            <div className="filtericon">
                                <img id_tag="2" src={verletzungen_leer}
                                     onClick={() => this.props.parentShallToggleFilter(2)}
                                />
                                Verletzung
                            </div>
                            <div className="filtericon">
                                <img id_tag="3" src={ernaehrung_leer} onClick={() => this.props.parentShallToggleFilter(3)}/>
                                Ernährung
                            </div>
                            <div className="filtericon">
                                <img id_tag="8" src={breakdance_leer} onClick={() => this.props.parentShallToggleFilter(8)}/>
                                Break Dance
                            </div>
                        </div>
                        <div id="filterrow">
                            <div className="filtericon">
                                <img id_tag="4" src={tipps_leer} onClick={() => this.props.parentShallToggleFilter(4)}/>
                                Tipps
                            </div>
                            <div className="filtericon">
                                <img id_tag="5" src={tricks_leer} onClick={() => this.props.parentShallToggleFilter(5)}/>
                                Tricks
                            </div>
                            <div className="filtericon">
                                <img id_tag="6" src={events_leer} onClick={() => this.props.parentShallToggleFilter(6)}/>
                                Events
                            </div>
                            <div className="filtericon">
                                <img id_tag="7" src={diy_leer} onClick={() => this.props.parentShallToggleFilter(7)}/>
                                DIY
                            </div>
                        </div>
                        <div id="filterrow">
                            <div className="filtericon">
                                <img id_tag="9" src={diskussionen_leer} onClick={() => this.props.parentShallToggleFilter(9)}/>
                                Diskussion
                            </div>
                            <div className="filtericon">
                                <img id_tag="10" src={trends_leer} onClick={() => this.props.parentShallToggleFilter(10)}/>
                                Trends
                            </div>
                            <div className="filtericon">
                                <img id_tag="11" src={funFacts_leer} onClick={() => this.props.parentShallToggleFilter(11)}/>
                                Fun Facts
                            </div>
                            <div className="filtericon">
                                <img id_tag="0"  src={Muelleimer} onClick={() => this.props.parentShallToggleFilter(0)}/>
                                Alle löschen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterOverlayTags;

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