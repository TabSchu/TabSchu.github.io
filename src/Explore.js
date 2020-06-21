import React, { Component } from 'react'
import HeaderBar from "./HeaderBar";
import Artikel from "./Artikel";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BeitragHook from "./hooks/BeitragHook";
import StoryHook from "./hooks/StoryHook";
import SubSportartHook from "./hooks/SubSportartHook";
import PersonHook from "./hooks/PersonHook";
import ThemenbereichHook from "./hooks/ThemenbereichHook";
import FilterOverlayTags from "./FilterOverlayTags";

class Explore extends Component {
    constructor(props) {
        super(props);
        this.handleChildsFilterClick = this.handleChildsFilterClick.bind(this);
        this.handleHideFilterForChild = this.handleHideFilterForChild.bind(this);
        this.state = {showFilterOverlay: false};
    }

    render() {
        let fetch_url_newest_beitrag = "http://localhost:8080/beitrag/newest";
        let fetch_url_stories = "http://localhost:8080/beitrag";
        let fetch_url_subsportart = "http://localhost:8080/subsportart";
        let fetch_url_person_group = "http://localhost:8080/person";
        let fetch_url_themenbereich = "http://localhost:8080/themenbereich";
        let filterOverlayTags;
        const showFilterOverlay = this.state.showFilterOverlay;
        if (showFilterOverlay) {
            filterOverlayTags = <FilterOverlayTags parentShallHideFilter={this.handleHideFilterForChild} />
        } else {
            console.log("don't show FilterOverlay");
        }

        return(
            <div id="explore">
            <HeaderBar parentShallHandleFilterClick={this.handleChildsFilterClick} />

                {filterOverlayTags}
                <div id="content">
                    <h3>sportarten</h3>
                    <SubSportartHook  fetch_url={fetch_url_subsportart}/>
                    <h3>sportler</h3>
                    <PersonHook fetch_url={fetch_url_person_group}/>
                    <Link to="/artikel" > <h3>top story</h3></Link>
                    <BeitragHook  fetch_url={fetch_url_newest_beitrag}/>
                    <h3  className="titelThemenbereich" >Themenbereich</h3>
                    <StoryHook fetch_url={fetch_url_stories}/>
                    <ThemenbereichHook fetch_url={fetch_url_themenbereich}/>
                </div>
            </div>
            
        )
    }

    handleChildsFilterClick() {
        //  this.setState({showFilterOverlay: true});
        console.log("Filter clicked in my Child Component");
        this.setState({showFilterOverlay: !this.state.showFilterOverlay});
    }

    handleHideFilterForChild() {
        //  this.setState({showFilterOverlay: true});
        console.log("from my Child Component: Parent shall hide filter");
        this.setState({showFilterOverlay: false});
    }
}

export default Explore;