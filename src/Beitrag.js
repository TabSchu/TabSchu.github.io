import React, { Component, useState } from 'react'
import Merkliste from './Merkliste';
import ArtikelIcon from './img/icon/Artikel.png'
import AudioIcon from './img/icon/Audio.png'
import VideoIcon from './img/icon/Video.png'
import MerklisteIcon from './img/icon/Merkliste_leer.png'
import MerklisteIcon_ausgefuellt from './img/icon/Merkliste_ausgefuellt.png'
import TeilenIcon from './img/icon/Teilen.png'
import Play from './img/icon/Play.png'
import Kopfhoerer from './img/icon/Kopfhoerer.png'
import config from "./config";

class Beitrag extends Component {

    constructor(props){
        super(props);
        this.openBeitrag = this.openBeitrag.bind(this);
        this.handleBeitrag = this.handleBeitrag.bind(this);
        this.toggleBeitragAufMerkliste = this.toggleBeitragAufMerkliste.bind(this);
        this.state = {
            aufMerkliste: this.props.isMerkliste,
            beitragId: this.props.id_beitrag
        }
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
        }else if (this.props.medientyp=="Podcast"){
            playicon = <img style={{float:"left", marginTop:"10px",marginLeft:"10px"}} src={Kopfhoerer}/>;
            typ = AudioIcon;
        }else if (this.props.medientyp=="Artikel"){
            //playicon = <img style={{float:"left", marginTop:"10px",marginLeft:"10px"}} src={Kopfhoerer}/>;
            typ = ArtikelIcon;
        }

        

        return(
            //  <Link to={art}>
            <div className="beitrag"  key={this.props.id_beitrag}
                onClick={this.props.showInhalt}
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
                                <li>
                                    <img src={TeilenIcon} onClick={this.teilen} />
                                    <img src={this.state.aufMerkliste?MerklisteIcon_ausgefuellt:MerklisteIcon}
                                         onClick={this.toggleBeitragAufMerkliste}/>
                                </li>
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

    toggleBeitragAufMerkliste(event){
        event.stopPropagation();
        this.setState({aufMerkliste:!this.state.aufMerkliste},
            //Callback: When asynchronous setStatus is finished:
            () => {this.updateMerklisteStatus()
        });

    }

    updateMerklisteStatus(){
        console.log(this.state.aufMerkliste);
        let aktion;
        if(this.state.aufMerkliste){
            aktion = "insert";
        }
        else { aktion = "delete";}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ beitrag_id: this.state.beitragId, user_id: 1 })
        };
        fetch(config.basisURL+'/updateMerkliste?aktion='+aktion, requestOptions)
            .then(response => response.json());
    }

    teilen(event){
        event.stopPropagation();
        alert("Coming soon! \nBald kannst du Beiträge auf Social Media teilen!");
    }
}


export default Beitrag;