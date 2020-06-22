import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import AudioIcon from './img/icon/Audio.png'
import PlayIcon from './img/icon/Play.png'
import MerklisteIcon from './img/icon/Merkliste_leer.png'
import TeilenIcon from './img/icon/Teilen.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class BeitragPodcast extends Component {
constructor(props){
    super(props);
}
    render() {
        return(
            <div>
            <div className="beitragPodcast"key={this.props.beitrag_id}>
                <div className="beitraginhalt">
                    <div className="beitragstitel">
                        <img src={PlayIcon}/>
                        {this.props.titel}
                    </div>
                    <div className="extra">
                            <ul>
                                <li> 
                                    <img src={AudioIcon} style={{ margin: "0px"}}/>
                                    {this.props.sportart}
                                </li>
                                <li></li>
                                <li><img src={TeilenIcon}  /> <img src={MerklisteIcon} onClick={this.addBeitragZuMerkliste}/></li>
                            </ul> 
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default BeitragPodcast;