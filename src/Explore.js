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
        this.handleChildsOpenFilterOverlayClick = this.handleChildsOpenFilterOverlayClick.bind(this);
        this.handleHideFilterForChild = this.handleHideFilterForChild.bind(this);
        this.handleToggleFilterForChild = this.handleToggleFilterForChild.bind(this);
        this.state = {  showFilterOverlay: false,
                        tagFilterActive: false,
                        filter_1: false, filter_2: false, filter_3: false, filter_4: false, filter_5: false,
                        filter_6: false, filter_7: false, filter_8: false, filter_9: false, filter_10: false, filter_11: false

        };
    }

    render() {
        let fetch_url_newest_beitrag = "http://localhost:8080/beitrag/newest";
        let fetch_url_stories = "http://localhost:8080/beitrag";
        let fetch_url_subsportart = "http://localhost:8080/subsportart";
        let fetch_url_person_group = "http://localhost:8080/person";
        let fetch_url_themenbereich = "http://localhost:8080/themenbereich";
        let filterOverlayTags;
        let showFilterOverlay = this.state.showFilterOverlay;
        if (showFilterOverlay) {
            filterOverlayTags = <FilterOverlayTags parentShallHideFilter={this.handleHideFilterForChild}
                                                   parentShallToggleFilter={this.handleToggleFilterForChild}/>
        } else {
            console.log("don't show FilterOverlay");
        }
        let content;
        let tagFilterActive = this.state.filter_1;//this.state.tagFilterActive;
        if (!tagFilterActive){
            content = <div id="content">
                        <h3>sportarten</h3>
                        <SubSportartHook  fetch_url={fetch_url_subsportart}/>
                        <h3>sportler</h3>
                        <PersonHook fetch_url={fetch_url_person_group}/>
                        <Link to="/artikel"> <h3>top story</h3></Link>
                        <BeitragHook  fetch_url={fetch_url_newest_beitrag}/>
                        <h3  className="titelThemenbereich" >Themenbereich</h3>
                        <StoryHook fetch_url={fetch_url_stories}/>
                        <ThemenbereichHook fetch_url={fetch_url_themenbereich}/>
                    </div>
        } else {
            content = <div id="content">
                <Link to="/artikel"><h3>top story</h3></Link>
                <BeitragHook fetch_url={fetch_url_newest_beitrag}/>
                <h3 className="titelThemenbereich">Themenbereich</h3>
                <StoryHook fetch_url={fetch_url_stories}/>
                <ThemenbereichHook fetch_url={fetch_url_themenbereich}/>
            </div>
        }
        return(
               <div id="explore">
                    <HeaderBar parentShallHandleFilterClick={this.handleChildsOpenFilterOverlayClick} />

                    {filterOverlayTags}
                    {content}
                </div>
        )
    }

    handleChildsOpenFilterOverlayClick() {
        console.log("Filter clicked in my Child Component");
        this.setState({showFilterOverlay: !this.state.showFilterOverlay});
    }

    handleHideFilterForChild() {
        console.log("from my Child Component: Parent shall hide filter");
        this.setState({showFilterOverlay: false});
    }

    handleToggleFilterForChild(filter) {
        console.log("from my Child Component: Parent shall toggle filter:"+filter);
        if (filter===0){
            this.setState({  showFilterOverlay: false,
                tagFilterActive: false,
                filter_1: false, filter_2: false, filter_3: false, filter_4: false, filter_5: false,
                filter_6: false, filter_7: false, filter_8: false, filter_9: false, filter_10: false, filter_11: false
            });
            return;
        }
        this.setState({showFilterOverlay: false, tagFilterActive: true});
        this.switchFilterState(filter);
    }

    switchFilterState(filter) {
        switch (filter) {
            case 1:
                this.setState({filter_1: !this.state.filter_1});
                break;
            case 2:
                this.setState({filter_2: !this.state.filter_2});
                break;
            case 3:
                this.setState({filter_3: !this.state.filter_3});
                break;
            case 4:
                this.setState({filter_4: !this.state.filter_4});
                break;
            case 5:
                this.setState({filter_5: !this.state.filter_5});
                break;
            case 6:
                this.setState({filter_6: !this.state.filter_6});
                break;
            case 7:
                this.setState({filter_7: !this.state.filter_7});
                break;
            case 8:
                this.setState({filter_8: !this.state.filter_8});
                break;
            case 9:
                this.setState({filter_9: !this.state.filter_9});
                break;
            case 10:
                this.setState({filter_10: !this.state.filter_10});
                break;
            case 11:
                this.setState({filter_11: !this.state.filter_11});
                break;
            default:
                break;
        }
    }
}

export default Explore;