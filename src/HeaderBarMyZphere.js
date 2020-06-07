import React, { Component } from 'react'
import Favoriten from "./Favoriten"
import Merkliste from "./Merkliste"
import EditProfil from "./EditProfil"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class HeaderBarMyZphere extends Component {

   /* <Image source={require("./img/Profilbild.png")}><Link to ="/ProfilBearbeiten">icon</Link></Image>*/
    render() {
        
        return(
            <Router>
            <div id="HeaderBarMyZphere">
               <ul>
                   <h1>Max Mustermann</h1>
                   <h2><Link to="/editProfil">icon</Link></h2>
                   <li><Link to="/merkliste">Merkliste</Link></li>
                   <li><Link to ="/favoriten">Favoriten</Link></li>
               </ul>
            </div>
            <Switch>
            <Route path="/editProfil">
                <EditProfil />
            </Route>
            <Route path="/favoriten">
                <Favoriten />
            </Route>
            <Route path="/merkliste">
                <Merkliste />
            </Route>
            </Switch>
            </Router>
        )
    }
}

export default HeaderBarMyZphere