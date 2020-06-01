import React, { Component } from 'react';
import Home from "./Home";
import Explore from "./Explore";
import MyZphere from "./MyZphere";
/*import Merkliste from "./Merkliste";*/
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Beitrag from './Beitrag';

class NavBar extends Component {

    render() {
        return(
        <Router>
            <div id="navBar">
                <ul>
                    <li><Link to="/">home</Link> </li>
                    <li><Link to="/explore">explore</Link></li>
                    <li><Link to="/myzphere">MyZphere</Link></li>
                
                </ul>
            </div>
            <Switch> 
                <Route path="/explore">
                <Explore />
                </Route>
                <Route path="/myzphere">
                    <MyZphere />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        )
    }
}

export default NavBar;