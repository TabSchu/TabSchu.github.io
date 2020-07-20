import React, { Component, useState } from 'react'
  import SportlerProfil from './img/icon/profil.png'
  import MerklisteIcon from './img/icon/Merkliste_leer.png'
  import MerklisteIcon_ausgefuellt from "./img/icon/Merkliste_ausgefuellt.png";
  import TeilenIcon from './img/icon/Teilen.png'
  import Zurueck    from './img/icon/Zurueck.png'
  import config from "./config";
  
import InhaltHook from './hooks/InhaltHook';
  import StoryHook from './hooks/StoryHook';

class Artikel extends Component { 
    constructor(props){
        super(props);
        
        this.showStory=this.showStory.bind(this);
        this.closeStory=this.closeStory.bind(this);
        this.toggleBeitragAufMerkliste = this.toggleBeitragAufMerkliste.bind(this);
        this.state = {
            openStory: false,
            aufMerkliste: this.props.isMerkliste,
            beitragId: this.props.id_beitrag
        }
    }
    render() {
        let fetch_url_stories = config.basisURL+"/beitrag";
        let seite;
        if(this.state.openStory){
            seite = <div><InhaltHook showHome={this.closeStory} fetch_url={this.state.url_beitrag}/></div>;
        }else{seite=<div key={this.props.beitrag_id}>
        <div id="banner" style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
            <div id="zurueck"> <img src={Zurueck} onClick={this.props.showHome}/> </div>
        </div>
        <div id="contentArtikel" >                
            <div id="titel">
                <h5>{this.props.kategorie}</h5>
                <h3>{this.props.titel}</h3>
            </div>
            <div id="autor"><img src={SportlerProfil} style={{marginRight:"10px"}}/> 
                Team zphere 
                <div className="icon"> <img src={TeilenIcon}  onClick={this.teilen} />
                <img src={this.state.aufMerkliste?MerklisteIcon_ausgefuellt:MerklisteIcon}  
                onClick={this.toggleBeitragAufMerkliste}/></div>
            </div>
            <div id="text">{this.props.text}
                </div>
            <div id="info">
                <div id="hashtag">#Meister #tanzen</div>
                <h3>Generelle Infos</h3>
                <ul>
                    <li><img src={SportlerProfil} className="center" align="middle" />1. Deutsche Liga</li>
                    <li><img src={SportlerProfil} className="center" align="middle" />Grün Gold Club Bremen</li>
                </ul>
                <h3>Ähnliche Beiträge: </h3>
            </div>
            {/* <div style={{width:"300px", overflowX:"scroll"}}> */}
            <StoryHook fetch_url={fetch_url_stories}  showInhalt={this.showStory}/>
            {/* </div> */}
        </div>
        </div>}
        return(
            <div>{seite}</div>
        )
    }
    showStory(id_beitrag){
            this.setState({openStory: true,
                url_beitrag:config.basisURL+"/beitrag/"+id_beitrag,
            });
    }
    closeStory(){
        this.setState({openStory: false});
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

export default Artikel;

 