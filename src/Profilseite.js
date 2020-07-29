import React, { Component, useState } from 'react'
import SportlerProfil from './img/icon/profil.png'
import Zurueck from "./img/icon/Zurueck.png";
import BeitragHook from './hooks/BeitragHook';
import InhaltHook from './hooks/InhaltHook';
import config from "./config";

class Profilseite extends Component { 
    constructor(props){
        super(props);
        this.showInhaltProfil = this.showInhaltProfil.bind(this);
        this.showProfilHome = this.showProfilHome.bind(this);
        this.state = {
            openProfilInhalt:false
        };
    }
    render() {
       // let fetch_url = "http://localhost:8080/beitrag";
        let fetch_url = config.basisURL+"/beitragByPerson?id_person="+this.props.id_person;
        // TODO: id_person als prop reingeben
        let seite;
        if(this.state.openProfilInhalt){
            seite = <div><InhaltHook showHome={this.showProfilHome} fetch_url={this.state.url_beitrag}/></div>;
        }else{seite = <div>
                
                <div id="HeaderBarMyZphere" style={{height:"120px", position:"fixed"}}>
                <ul>
                    <p style={{top:"10.5px"}}>{this.props.name}</p>
                    <p><img src={this.props.img_url} style={{height:"50px", width:"auto", borderRadius:"10px"
                    // backgroundImage: "url(" + this.props.img_url + ")" img src={SportlerProfil} 
                    }} /></p>
                </ul>
            </div>
            
            <img src={Zurueck} onClick={this.props.showHome}
                style={{zIndex:"50",height:"25px", width:"auto",top:"12.5px",marginLeft:"30px",position:"fixed"}}/>
        <div id="content" style={{position:"absolute", top:"70px", zIndex:"5"}}>                
        <div id="generelleInfos">   
        {/* <div id="info" style={{height:"125px"}}> */}
            <h3>Generelle Infos</h3>
            <ul>
                <li><img src={SportlerProfil} />{this.props.info1}</li>
                <li><img src={SportlerProfil} />{this.props.info2}</li>
            </ul>
            {/* </div> */}
        </div>            
            <BeitragHook fetch_url={fetch_url} showInhalt={this.showInhaltProfil}/>
        </div></div>
        }
        return(
            <div>{seite}
            </div>    
        )
    }
    showProfilHome(){
        this.setState({openProfilInhalt: false});
    }
    showInhaltProfil(id_beitrag){
        this.setState({openProfilInhalt: true,
            url_beitrag:config.basisURL+"/beitrag/"+id_beitrag,
        });
    }
}

export default Profilseite;