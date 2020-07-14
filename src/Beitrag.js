import React, { Component, useState } from 'react'
import Merkliste from './Merkliste';
import ArtikelIcon from './img/icon/Artikel.png'
import AudioIcon from './img/icon/Audio.png'
import VideoIcon from './img/icon/Video.png'
import MerklisteIcon from './img/icon/Merkliste_leer.png'
import MerklisteIcon_ausgefuellt from './img/icon/Merkliste_ausgefuellt.png'
import TeilenIcon from './img/icon/Teilen.png'
import {Link} from "react-router-dom";
import Play from './img/icon/Play.png'
import Kopfhoerer from './img/icon/Kopfhoerer.png'
class Beitrag extends Component {

    constructor(props){
        super(props);
        this.openBeitrag = this.openBeitrag.bind(this);
        this.handleBeitrag = this.handleBeitrag.bind(this);
    }
    render() {
        var typ = ArtikelIcon;
        var playicon;
        var arr = [];
        arr = this.parseTeaserElement(arr);
        
        var art;

        /*if(merklisteActive){ MerklisteIcon= ididid} */
        if (this.props.medientyp=="Video"){
            typ = VideoIcon;
            playicon = <img style={{float:"left", marginTop:"10px",marginLeft:"10px"}} src={Play}/>;
            art=this.props.showVideo;
        }else if (this.props.medientyp=="Podcast"){
            playicon = <img style={{float:"left", marginTop:"10px",marginLeft:"10px"}} src={Kopfhoerer}/>;
            typ = AudioIcon;
            art=this.props.showPodcast;
        }else if (this.props.medientyp=="Artikel"){
            //playicon = <img style={{float:"left", marginTop:"10px",marginLeft:"10px"}} src={Kopfhoerer}/>;
            typ = ArtikelIcon;
            var art=this.props.showArtikel;
        }
        var merkIcon = MerklisteIcon;
        if(this.props.isMerkliste){
            merkIcon = MerklisteIcon_ausgefuellt
        }

        

        return(
            //  <Link to={art}>
            <div className="beitrag"  key={this.props.beitrag_id} 
                onClick={art}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
                <div className="beitraginhalt">
                    {playicon}
                    <div className="beitragstitel">

                        <div className="beitragskategorien">{this.props.kategorie} </div>
                        {this.props.titel}
                    </div>
                    <div className="teaser">
                        <ul>
                            { arr.map(item =><li key={item}>- {item}</li>) }
                        </ul>
                        <div className="extra">
                            <ul>
                                <li> 
                                    <img src={typ} />
                                    {this.props.sportart}
                                </li>
                                <li></li>
                                <li><img src={TeilenIcon} /> <img src={merkIcon} onClick={this.addBeitragZuMerkliste}/></li>
                            </ul> 
                        </div>
                    </div> 
                    <div className="">
                    </div>
                </div>
            </div> 
            // </Link>
        )
    }
    openBeitrag(){

    }
    handleBeitrag(){

    }
    // ggf. gibt es keinen Teaser dann bleibt es leer, z.B. bei Audio
    parseTeaserElement(arr){
        if(this.props.teaser!=undefined){
            var json = JSON.parse(this.props.teaser);    //console.log(json);
            Object.keys(json).forEach(function(key) {
             //   console.log(key);
                arr.push(json[key]);
            });
        }
        return arr;
    }
}


export default Beitrag;