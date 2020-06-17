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
import HeaderBarProfilEdit from './HeaderBarProfilEdit';

class HeaderBarMyZphere extends Component {

    /*constructor(props){
        super(props);
            
            this.moveToEditProfil = this.moveToEditProfil.bind(this),
            this.moveToMyZphere = this.moveToMyZphere.bind(this),
            this.setState = {showHeaderEditProfil : false};
        
    }

    moveToEditProfil() {
        this.setState ({showHeaderEditProfil: true});
    }

    moveToMyZphere(){
        this.setState ({showHeaderEditProfil : false})
    }*/

   
    render() {
        return(
            <div id="HeaderBarMyZphere">
                <h1>Max Mustermann</h1>
                </div>

        /*const showHeaderEditProfil = this.state.showHeaderEditProfil;
        let button;

       if(!showHeaderEditProfil){
            
        }else {
           button = <Logout    onClick={this.moveToEditProfil} />
        }*/
        
            /*<Router>
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
            </Router> */
        )
    }
}

export default HeaderBarMyZphere