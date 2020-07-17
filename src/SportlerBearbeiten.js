import React, { Component } from 'react'
import SportlerProfil from './img/icon/profil.png'
import FavoritenPersonBearbeitenHook from "./hooks/FavoritenPersonBearbeitenHook";
import config from "./config";

class SportlerBearbeiten extends Component{

    render(){
        let fetch_url_person_favoriten = config.basisURL+"/person?abostatus=1";
        return(


        <div id="Favoriten">
            <div className="SportlerWaagerecht">
                            <div id="SportlerReihe">
                                <img src={SportlerProfil} />
                                Werner Sommer
                                <div id="checkbox"><input  type="checkbox" value="check"/>
                                </div>        
                            </div>
                        </div>
            <FavoritenPersonBearbeitenHook fetch_url={fetch_url_person_favoriten}/>
        </div>

        )
    }
}

export default SportlerBearbeiten;