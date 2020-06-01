import React, { Component } from 'react'
import Merkliste from './Merkliste';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class Beitrag extends Component {
/**
 *  <Router> 
 *  <Switch>
                        <Route path="/merkliste">
                            <Merkliste />
                        </Route>
                    </Switch> */
    render() {
        return(

           
            <div class="beitrag">
                <div class="beitraginhalt">
                    <div class="beitragstitel">
                        <div class="beitragskategorien">Breaking News: </div>
                        Maria wechselt den Verein!
                        <ul>
                            <li><Link to="/merkliste">merkliste</Link></li>
                            
                        </ul>
                    </div>
                    <div class="teaser">
                        <p>
                        <ul>
                            <li>sie wechselt nach Frankfurt</li>
                            <li>„sehr glücklich über die Entscheidung“</li>
                            </ul>
                        </p>
                    </div>
                   
                    
                    <div class="">
                    </div>
                </div>
            </div>
          
            
        )
    }
}

export default Beitrag;