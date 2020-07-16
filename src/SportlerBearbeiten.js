import React, { Component } from 'react'
import SportlerProfil from './img/icon/profil.png'
import FavoritenPersonBearbeitenHook from "./hooks/FavoritenPersonBearbeitenHook";

class SportlerBearbeiten extends Component{

    render(){
        let fetch_url_person_favoriten = "http://localhost:8080/person?abostatus=1";
        return(


        <div id="Favoriten">
            <FavoritenPersonBearbeitenHook fetch_url={fetch_url_person_favoriten}/>
        </div>

        )
    }
}

export default SportlerBearbeiten;