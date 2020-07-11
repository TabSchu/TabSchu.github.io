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
import Tanzen_ausgefuellt from "./img/icon/Tanzen_ausgefuellt.png";
import Parkour_ausgefuellt from "./img/icon/Parkour_ausgefuellt.png";
import Golf_ausgefuellt from "./img/icon/Golf_ausgefuellt.png";
import Kampf_ausgefuellt from "./img/icon/Kampf_ausgefuellt.png";
import Reiten_ausgefuellt from "./img/icon/Reiten_ausgefuellt.png";
import Tischtennis_ausgefuellt from "./img/icon/Tischtennis_ausgefuellt.png";
import Volleyball_ausgefuellt from "./img/icon/Volleyball_ausgefuellt.png";

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
                                <img  id_tag="3" src={this.props.filterList[1].active ? Tanzen_ausgefuellt : Tanzen_leer}
                                      onClick={() => this.props.parentShallToggleFilter(3)}/>
                                Tanzen
                            </div>
                            <div className="filtericon">
                                <img  id_tag="2" src={this.props.filterList[0].active ? Parkour_ausgefuellt : Parkour_leer}
                                      onClick={() => this.props.parentShallToggleFilter(2)}/>
                                Parkour
                            </div>
                            <div className="filtericon">
                                <img  id_tag="4" src={Golf_leer} src={this.props.filterList[2].active ? Golf_ausgefuellt : Golf_leer}
                                      onClick={() => this.props.parentShallToggleFilter(4)}/>
                                Golf
                            </div>
                            <div className="filtericon">
                                <img  id_tag="5" src={Kampf_leer} src={this.props.filterList[3].active ? Kampf_ausgefuellt : Kampf_leer}
                                      onClick={() => this.props.parentShallToggleFilter(5)}/>
                                Kampfsport
                            </div>
                        </div>
                        <div id="filterrow">
                            <div className="filtericon">
                                <img  id_tag="6" src={this.props.filterList[4].active ? Reiten_ausgefuellt : Reiten_leer}
                                      onClick={() => this.props.parentShallToggleFilter(6)}/>
                                Reiten
                            </div>
                            <div className="filtericon">
                                <img id_tag="7" src={this.props.filterList[5].active ? Tischtennis_ausgefuellt : Tischtennis_leer}
                                     onClick={() => this.props.parentShallToggleFilter(7)}/>
                                Tischtennis
                            </div>
                            <div className="filtericon">
                                <img  id_tag="8" src={this.props.filterList[6].active ? Volleyball_ausgefuellt : Volleyball_leer}
                                      onClick={() => this.props.parentShallToggleFilter(8)}/>
                                Volleyball
                            </div>
                            <div className="filtericon">
                                <img  id_tag="0" src={Muelleimer} onClick={() => this.props.parentShallToggleFilter(0)}/>
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