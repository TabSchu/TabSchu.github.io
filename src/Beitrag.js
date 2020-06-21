import React, { Component, useState } from 'react'
import Merkliste from './Merkliste';
import ArtikelIcon from './img/icon/Artikel.png'
import AudioIcon from './img/icon/Audio.png'
import VideoIcon from './img/icon/Video.png'
import MerklisteIcon from './img/icon/Merkliste_leer.png'
import TeilenIcon from './img/icon/Teilen.png'
class Beitrag extends Component {

    render() {
        var typ = ArtikelIcon;
        var arr = [];
        arr = this.parseTeaserElement(arr);
        /*if(merklisteActive){ MerklisteIcon= ididid} */
        if (this.props.medientyp=="Video"){
            typ = VideoIcon;
        }else if (this.props.medientyp=="Audio"){
            typ = AudioIcon;
        }
        return(
            <div className="beitrag"  key={this.props.beitrag_id}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
                <div className="beitraginhalt">
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
                                    {/* <img src={ArtikelIcon} /> */}
                                    {/* {this.props.medientyp} */}
                                    {this.props.sportart}
                                </li>
                                <li></li>
                                <li><img src={TeilenIcon} /> <img src={MerklisteIcon} onClick={this.addBeitragZuMerkliste}/></li>
                            </ul> 
                        </div>
                    </div> 
                    <div className="">
                    </div>
                </div>
            </div>
          
            
        )

        /*
        * <p>{this.props.medientyp} </p>
                                    <img className="iconBar" src={ArtikelIcon} />

                                    <p key={this.props.sport_id} > {this.props.sportart}</p>

          *
          *
          <li ><img className="iconBar" src={TeilenIcon} /> <img  className="iconBar" src={MerklisteIcon} /><button onClick={this.addBeitragZuMerkliste}>M</button> </li>
        * */
    }

    // ggf. gibt es keinen Teaser dann bleibt es leer, z.B. bei Audio
    parseTeaserElement(arr){
        if(this.props.teaser!=undefined){
            var json = JSON.parse(this.props.teaser);    //console.log(json);
            Object.keys(json).forEach(function(key) {
                console.log(key);
                arr.push(json[key]);
            });
        }
        return arr;
    }
}


export default Beitrag;