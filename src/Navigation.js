import React, { Component } from 'react';
import Explore from "./Explore";
import MyZphere from "./MyZphere";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';
import HeaderBarMerkliste from './HeaderBarMerkliste';


/*class Navigation extends Component{

    render(){
        return(
            <Router>
                <Route path="/explore" components ={{main: NavBar, sidebar: HeaderBar}}></Route>
                <Route path="/myZphere" components = {{main: NavBar, sidebar: HeaderBar}}></Route>
                <Route path="/Merkliste" components = {{main: NavBar, sidebar: HeaderBarMerkliste}}></Route>



               

            </Router>
        )
    }



    

}

export default Navigation;*/