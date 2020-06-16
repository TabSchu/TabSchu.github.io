import React, { Component, useState } from 'react'
import HeaderBarMyZphere from './HeaderBarMyZphere'
import Merkliste from './Merkliste';
import Favoriten from "./Favoriten";
import EditProfil from "./EditProfil";
import HeaderBarProfilEdit from "./HeaderBarProfilEdit";
import Beitrag from './Beitrag';
import ProfilBearbeitenIcon from './img/profilBearbeiten.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class MyZphere extends Component {

    render(){
        return(
            <Router>
            
                <div id ="Links">
                    <ul>
                        <li><Link to ="/merkliste">Merkliste</Link></li>
                        <li><Link to ="/editProfil"><img src={ProfilBearbeitenIcon} /></Link></li>
                        <li><Link to ="/favoriten">Favortien</Link></li>
                    </ul>
                </div>

            <Switch>
            <Route path="/editProfil" render={props =>
                <div>
                <HeaderBarProfilEdit />
                <EditProfil />
                </div>
             }   />
                
            
            <Route path="/favoriten" component={Favoriten}>
                
            </Route>
            <Route path="/merkliste" component={Merkliste}>
            </Route>

            </Switch>
            </Router>

        )
    }



}
export default MyZphere;