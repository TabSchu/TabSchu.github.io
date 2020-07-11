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
import tutorials_ausgefuellt from "./img/icon/tutorials_ausgefuellt.png";
import verletzungen_ausgefuellt from "./img/icon/verletzungen _ausgefuellt.png";
import ernaehrung_ausgefuellt from "./img/icon/ernaehrung_ausgefuellt.png";
import breakdance_ausgefuellt from "./img/icon/breakdance_ausgefuellt.png";
import tipps_ausgefuellt from "./img/icon/tipps_ausgefuellt.png";
import tricks_ausgefuellt from "./img/icon/tricks_ausgefuellt.png";
import events_ausgefuellt from "./img/icon/events_ausgefuellt.png";
import diy_ausgefuellt from "./img/icon/diy_ausgefuellt.png";
import diskussionen_ausgefuellt from "./img/icon/diskussionen_ausgefuellt.png";
import trends_ausgefuellt from "./img/icon/trends_ausgefuellt.png";
import funFacts_ausgefuellt from "./img/icon/funFacts_ausgefuellt.png";

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
                                <img id_tag="1" src={this.props.filterList[0].active ? tutorials_ausgefuellt : tutorials_leer}
                                     onClick={() => this.props.parentShallToggleFilter(1)}
                                />
                                Tutorials
                            </div>
                            <div className="filtericon">
                                <img id_tag="2" src={this.props.filterList[1].active ? verletzungen_ausgefuellt : verletzungen_leer}
                                     onClick={() => this.props.parentShallToggleFilter(2)}
                                />
                                Verletzung
                            </div>
                            <div className="filtericon">
                                <img id_tag="3" src={this.props.filterList[2].active ? ernaehrung_ausgefuellt : ernaehrung_leer}
                                     onClick={() => this.props.parentShallToggleFilter(3)}/>
                                Ernährung
                            </div>
                            <div className="filtericon">
                                <img id_tag="8" src={this.props.filterList[7].active ? breakdance_ausgefuellt : breakdance_leer}
                                     onClick={() => this.props.parentShallToggleFilter(8)}/>
                                Break Dance
                            </div>
                        </div>
                        <div id="filterrow">
                            <div className="filtericon">
                                <img id_tag="4" src={this.props.filterList[3].active ? tipps_ausgefuellt : tipps_leer}
                                     onClick={() => this.props.parentShallToggleFilter(4)}/>
                                Tipps
                            </div>
                            <div className="filtericon">
                                <img id_tag="5" src={this.props.filterList[4].active ? tricks_ausgefuellt : tricks_leer}
                                     onClick={() => this.props.parentShallToggleFilter(5)}/>
                                Tricks
                            </div>
                            <div className="filtericon">
                                <img id_tag="6" src={this.props.filterList[5].active ? events_ausgefuellt : events_leer}
                                     onClick={() => this.props.parentShallToggleFilter(6)}/>
                                Events
                            </div>
                            <div className="filtericon">
                                <img id_tag="7" src={this.props.filterList[6].active ? diy_ausgefuellt : diy_leer}
                                     onClick={() => this.props.parentShallToggleFilter(7)}/>
                                DIY
                            </div>
                        </div>
                        <div id="filterrow">
                            <div className="filtericon">
                                <img id_tag="9" src={this.props.filterList[8].active ? diskussionen_ausgefuellt : diskussionen_leer}
                                     onClick={() => this.props.parentShallToggleFilter(9)}/>
                                Diskussion
                            </div>
                            <div className="filtericon">
                                <img id_tag="10" src={this.props.filterList[9].active ? trends_ausgefuellt : trends_leer}
                                     onClick={() => this.props.parentShallToggleFilter(10)}/>
                                Trends
                            </div>
                            <div className="filtericon">
                                <img id_tag="11" src={this.props.filterList[10].active ? funFacts_ausgefuellt : funFacts_leer}
                                     onClick={() => this.props.parentShallToggleFilter(11)}/>
                                Fun Facts
                            </div>
                            <div className="filtericon">
                                <img id_tag="0"  src={Muelleimer}
                                     onClick={() => this.props.parentShallToggleFilter(0)}/>
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
