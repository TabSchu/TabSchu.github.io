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
            <FavoritenPersonBearbeitenHook fetch_url={fetch_url_person_favoriten} changeSportler={this.changeSportler}/>
        </div>

        )
    }
    changeSportler(id,option){
        if (option!=null){
            const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            };
            console.log("remove: " + id);
            fetch(config.basisURL+'/removeUser/'+id, requestOptions)
                    .then(response => response.json());
        }else{
            console.log(id)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                };
                console.log("add: " + id)
                fetch(config.basisURL+'/addUser/'+id, requestOptions)
                        .then(response => response.json());
        }
        // window.location.reload();
    }
}

export default SportlerBearbeiten;