import React, { Component } from 'react'
// import BeitragHook from "./beitragHook";
import Zurueck from "./img/icon/Zurueck.png";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Themengebiet extends Component {
constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.displayFilter = this.displayFilter.bind(this);
    this.filterclose = this.filterclose.bind(this);
    this.state = {onfilter: false};
}

displayFilter() {
    this.setState({onfilter: true});
}

filterclose(){
    // document.getElementById("filterOverlay").style.display="none";
    this.setState({onfilter: false});
    console.log("close")
}
    render() {
        return(
            <div>
                <div id="headerBar">
                    <ul>
                        <li><img src={Zurueck}/></li>                    
                        <li>Themengebiet</li>
                        <li></li>
                    </ul>
                </div>
                <div id="Beitragsart">
                    <ul>
                        <li><Link to="/themengebiet/podcast"><p> Podcast </p></Link> </li>                    
                        <li><Link to="/themengebiet/artikel"><p> Artikel </p></Link> </li>
                        <li><Link to="/themengebiet/video"><p> Video </p></Link> </li>
                    </ul>
                </div>
            <div id="content">
                <div>
                    {/* <BeitragHook /> */}
                </div>
            </div>
           </div>
           
        )
    }
}
export default Themengebiet;