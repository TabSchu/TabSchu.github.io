import React, { Component } from 'react';
import {  Link } from "react-router-dom";
//import config from "config"

import BeitragHook from "./hooks/BeitragHook";
import SubSportartHook from "./hooks/SubSportartHook";
import PersonHook from "./hooks/PersonHook";
import ThemenbereichHook from "./hooks/ThemenbereichHook";
import FilterOverlayTags from "./FilterOverlayTags";
import Themengebiet from './Themengebiet';
import Filter_leer from "./img/icon/Filter_leer.png";
import Filter_ausgefuellt from "./img/icon/Filter_ausgefuellt.png";
import Suche from "./img/icon/suche_lupe.png";
import SearchBar from "./SearchBar";


class Explore extends Component {

    constructor(props) {
        super(props);
        this.handleChildsOpenFilterOverlayClick = this.handleChildsOpenFilterOverlayClick.bind(this);
        this.handleHideFilterForChild = this.handleHideFilterForChild.bind(this);
        this.handleToggleFilterForChild = this.handleToggleFilterForChild.bind(this);


        this.toggleStatusFilterItemAndSetURL = this.toggleStatusFilterItemAndSetURL.bind(this);

        this.handleChildsOpenSerachBarClick = this.handleChildsOpenSerachBarClick.bind(this);
        this.handleSearchBarForChild = this.handleSearchBarForChild.bind(this);

 
        this.resetAllFilterItemsToFalse = this.resetAllFilterItemsToFalse.bind(this);
        this.handleChildsShowThemengebiet = this.handleChildsShowThemengebiet.bind(this);
        this.handleThemengebietForChild = this.handleThemengebietForChild.bind(this);

        this.setUrlThemenbereich = this.setUrlThemenbereich.bind(this);

        this.state = {  showFilterOverlay: false,
                        tagFilterActive: false,
                        showThemengebiet: false,
                        showSearchBar: false,

                        filterTagList: [
                            { id: '1', active: false }, { id: '2', active: false },  { id: '3', active: false }, { id: '4', active: false },
                            { id: '5', active: false }, { id: '6', active: false }, { id: '7', active: false },
                            { id: '8', active: false }, { id: '9', active: false },  { id: '10', active: false }, { id: '11', active: false }
                        ],
                        fetch_url_themenbereich:  "http://localhost:8080/themenbereichByTags",
                        fetch_url_search: ""

        };


    }


    render() {
        let fetch_url_newest_beitrag = "http://localhost:8080/beitrag/newest";
        let fetch_url_subsportart = "http://localhost:8080/subsportart";
        let fetch_url_person_group = "http://localhost:8080/person";
        let filterOverlayTags;
        let showFilterOverlay = this.state.showFilterOverlay;
        let searchBar;
        let showSearchBar = this.state.showSearchBar;
        if (showFilterOverlay) {
            filterOverlayTags = <FilterOverlayTags parentShallHideFilter={this.handleHideFilterForChild}
                                                   parentShallToggleFilter={this.handleToggleFilterForChild}
                                                   filterList={this.state.filterTagList}
                                />
        } //else {   console.log("don't show FilterOverlay");  }
        
        if(showSearchBar){
            searchBar = <SearchBar parentShallHideSearchBar = {this.handleSearchBarForChild}
                                   parentShallSearchForChildShowThemengebiet ={(searchString) => this.sucheBeitrag(searchString)}
                        />
        }
        let content;
        let tagFilterActive = this.state.tagFilterActive;
        let themenbereiche;
        if (!tagFilterActive){
            themenbereiche =  <ThemenbereichHook fetch_url={this.state.fetch_url_themenbereich} fetch_url_beitrag={this.state.fetch_url_beitrag} filterListe={this.state.filterTagList} />;
            content = <div id="content" style={{marginTop:"80px"}}>
                        <h3>sportarten</h3>
                        <SubSportartHook parentShallForGrandChildsShowThemengebiet ={(id) => this.handleChildsShowThemengebiet(id)}
                                         fetch_url={fetch_url_subsportart}/>
                        <h3>sportler</h3>
                        <PersonHook fetch_url={fetch_url_person_group}/>
                        <Link to="/artikel"> <h3>top story</h3></Link>
                        <BeitragHook  fetch_url={fetch_url_newest_beitrag}/>
                        {themenbereiche}
                    </div>
        } else {
            themenbereiche =  <ThemenbereichHook fetch_url={this.state.fetch_url_themenbereich} filterListe={this.state.filterTagList} />;
            //<Link to="/artikel"></Link>
            content = <div id="content" style={{marginTop:"80px"}}>
                            <h3>top story</h3>
                        <BeitragHook fetch_url={fetch_url_newest_beitrag}/>
                        {themenbereiche}
                    </div>
        }

        let seite;
        if(!this.state.showThemengebiet){
            seite = <div id="explore">
            {/* <HeaderBar parentShallHandleFilterClick={this.handleChildsOpenFilterOverlayClick} /> */}

            <div id="headerBar">
                <ul>
                    <li><img src={Suche} onClick={this.handleChildsOpenSerachBarClick}/></li>
                    <li>entdecken</li>
                    <li>
                        <img src={this.state.tagFilterActive ? Filter_ausgefuellt : Filter_leer}
                             onClick={this.handleChildsOpenFilterOverlayClick} />

                    </li>
                </ul>
            </div>

            <div id="Beitragsart" >

                <ul style={{width: "auto", display: "flex", overflowX: "scroll", padding:"0 10px"}}>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("fit")}>fit</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("DIY")}>DIY</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("runnershigh")}>runnershigh</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("FreshAndFruity")}>#FreshAndFruity</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("Roberto")}>Roberto</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("Corona")}>Corona</li>
                </ul>
            </div>
            {filterOverlayTags}
            {content}
            {searchBar}
            </div>
        }else{

            seite = <Themengebiet  parentShallForChildsShowThemengebiet={this.handleThemengebietForChild}
                                   fetchUrl={this.state.fetch_url_search} />;
            // parentShallHandleShowThemengebiet={this.handleChildsShowThemengebiet}/>;
        }

        return(
               <div>{seite}</div>
        )
    }

    handleChildsShowThemengebiet(subsportartID){    //console.log("in explore show themenbereich");
        this.setState({showThemengebiet: !this.state.showThemengebiet,
                            fetch_url_search: "http://localhost:8080/beitragBySubsportart?subsportart="+subsportartID
                            });
    }

    handleThemengebietForChild(){
        this.setState({showThemengebiet: false});

    }
    sucheBeitrag(searchString) {
        if (searchString && searchString.length>0) {
            this.setState({
                showThemengebiet: !this.state.showThemengebiet,
                fetch_url_search: "http://localhost:8080/beitragSuche?suche=" + searchString
            });
        }

    }

    
    handleChildsOpenFilterOverlayClick() { //  console.log("Filter clicked in my Child Component");
        this.setState({showFilterOverlay: !this.state.showFilterOverlay});
    }
    handleChildsOpenSerachBarClick(){
        this.setState({showSearchBar: !this.state.showSearchBar});
    }

    handleSearchBarForChild(){
        this.setState({showSearchBar: false});
    }

    handleHideFilterForChild() {  //  console.log("from my Child Component: Parent shall hide filter");
        this.setState({showFilterOverlay: false});
    }

    handleToggleFilterForChild(filter) {
        if (filter===0){
            this.setState({  tagFilterActive: false }); //showFilterOverlay: false,
            this.resetAllFilterItemsToFalse();
            return;
        }
        this.toggleStatusFilterItemAndSetURL(filter);
    }


    toggleStatusFilterItemAndSetURL = filteredID => {
        this.setState(
            state => {
                    const filterTagList=[];
                    this.state.filterTagList.forEach(function(item) {
                        if(item.id==filteredID){
                            item.active = !item.active;
                        }
                        filterTagList.push(item);
                    });
                    return { filterTagList };
                },
            //Callback: When asynchronous setStatus is finished:
            () => {
                this.setUrlThemenbereich();
                this.setWhetherFilterActive();
            }
        );
    };

    setWhetherFilterActive(){
            let activeCounter = 0;
            this.state.filterTagList.forEach(function(item) {
                if(item.active){
                    activeCounter++;
                }
            });
            if(activeCounter>0){
                this.setState({tagFilterActive: true });
            } else {
                this.setState({tagFilterActive: false });
            }
    };
    setUrlThemenbereich(){
        let addFilterToURL = "?";
        this.state.filterTagList.forEach(function(item) {
            if(item.active){
                addFilterToURL += "tags[]="+item.id+"&";
            }
        });
        addFilterToURL = addFilterToURL.slice(0, -1);
        //z.B. "http://localhost:8080/themenbereichByTags?tags[]=9&tags[]=11";
        let default_fetch_url = "http://localhost:8080/themenbereichByTags";
        let fetchURLwithFilter =default_fetch_url+addFilterToURL;
        this.setState({fetch_url_themenbereich:fetchURLwithFilter});
        //console.log(fetchURLwithFilter);
    }

    resetAllFilterItemsToFalse () {
        this.setState(state => {
            const filterTagList=[];
            this.state.filterTagList.forEach(function(item) {
                    item.active = false;
                filterTagList.push(item);
            });
            return { filterTagList };
        });
        // reset filter in url:
        this.setState({fetch_url_themenbereich : "http://localhost:8080/themenbereichByTags"});
    };

}

export default Explore;