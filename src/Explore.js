import React, { Component } from 'react';
import {  Link } from "react-router-dom";
//import config from "config"

import BeitragHook from "./hooks/BeitragHook";
import SubSportartHook from "./hooks/SubSportartHook";
import PersonHook from "./hooks/PersonHook";
import ProfilHook from "./hooks/ProfilHook";
import InhaltHook from "./hooks/InhaltHook";
import ThemenbereichHook from "./hooks/ThemenbereichHook";
import FilterOverlayTags from "./FilterOverlayTags";
import Themengebiet from './Themengebiet';
import Filter_leer from "./img/icon/Filter_leer.png";
import Filter_ausgefuellt from "./img/icon/Filter_ausgefuellt.png";
import Suche from "./img/icon/suche_lupe.png";
import SearchBar from "./SearchBar";
import config from "./config";



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

        this.showHome = this.showHome.bind(this);
        this.showInhalt = this.showInhalt.bind(this);
        this.showProfil = this.showProfil.bind(this);



        this.state = {  showFilterOverlay: false,
                        tagFilterActive: false,
                        showThemengebiet: false,
                        showSearchBar: false,

                        openHome:true,
                        openProfil:false,
                        openInhalt:false,

                        filterTagList: [
                            { id: '1', active: false }, { id: '2', active: false },  { id: '3', active: false }, { id: '4', active: false },
                            { id: '5', active: false }, { id: '6', active: false }, { id: '7', active: false },
                            { id: '8', active: false }, { id: '9', active: false },  { id: '10', active: false }, { id: '11', active: false }
                        ],
                        fetch_url_themenbereich:  config.basisURL+"/themenbereichByTags",
                        fetch_url_search: "",
                        titelThemengebiet: "",
                        fetch_url_topstory: config.basisURL+"/beitragTopstory",
                        fetch_url_todaysSpecial: config.basisURL+"/beitragTodaysSpecial"

        };


    }


    render() {
        let fetch_url_subsportart = config.basisURL+"/subsportart";
        let fetch_url_person_group = config.basisURL+"/personFavoritenByUser?id_person=1";
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
            themenbereiche =  <ThemenbereichHook showInhalt={this.showInhalt} 
                                        fetch_url={this.state.fetch_url_themenbereich} fetch_url_beitrag={this.state.fetch_url_beitrag} filterListe={this.state.filterTagList} />;
            content = <div id="content" style={{marginTop:"80px"}}>
                        <h3>sportarten</h3>
                        <SubSportartHook parentShallForGrandChildsShowThemengebiet ={(id, titelThemengebiet) => this.handleChildsShowThemengebiet(id, titelThemengebiet)}
                                         fetch_url={fetch_url_subsportart}/>
                        <h3>sportler</h3>
                        <PersonHook fetch_url={fetch_url_person_group}  showProfil={this.showProfil} />
                        <Link to="/artikel"> <h3>top story</h3></Link>
                        <BeitragHook  fetch_url={this.state.fetch_url_topstory} showInhalt={this.showInhalt}/>
                        {themenbereiche}
                        <h3>Today's Special</h3>
                        <BeitragHook  fetch_url={this.state.fetch_url_todaysSpecial} showInhalt={this.showInhalt}/>
                    </div>
        } else {
            themenbereiche =  <ThemenbereichHook showInhalt={this.showInhalt} 
                                fetch_url={this.state.fetch_url_themenbereich} filterListe={this.state.filterTagList} />;
            //<Link to="/artikel"></Link>
            content = <div id="content" style={{marginTop:"80px"}}>
                            <h3>top story</h3>
                        <BeitragHook fetch_url={this.state.fetch_url_topstory} showInhalt={this.showInhalt} />
                        {themenbereiche}
                        <h3>Today's Special</h3>
                        <BeitragHook  fetch_url={this.state.fetch_url_todaysSpecial} showInhalt={this.showInhalt}/>
                    </div>
        }

        let seite;
        if(this.state.openHome){
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
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("Roberto")}>Roberto</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("Bremen")}>Bremen</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("#FreshAndFruity")}>#FreshAndFruity</li>
                    <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("Salsa")}>Salsa</li>
                    {/* <li style={{width: "auto", margin:"0 10px"}} onClick ={() => this.sucheBeitrag("Corona")}>Corona</li> */}
                </ul>
            </div>
            {filterOverlayTags}
            {content}
            {searchBar}
            </div>
        }
        if(this.state.showThemengebiet){

            seite = <Themengebiet  parentShallForChildsShowThemengebiet={this.handleThemengebietForChild}
            showInhalt={this.showInhalt} 
                                   fetchUrl={this.state.fetch_url_search} titelThemengebiet={this.state.titelThemengebiet} />;
            // parentShallHandleShowThemengebiet={this.handleChildsShowThemengebiet}/>;
        }
        if(this.state.openInhalt){
            seite = <div><InhaltHook showHome={this.showHome} fetch_url={this.state.url_beitrag}/></div>;
        }
        if(this.state.openProfil){
            seite = <div><ProfilHook showHome={this.showHome} fetch_url={this.state.url_beitrag}/></div>;
        }
            
        return(
               <div>{seite}</div>
        )
    }
    showHome(){
        
        console.log("Home");
        this.setState({openHome: true});
        this.setState({openInhalt: false});
        this.setState({openProfil: false});
    }
    showInhalt(id_beitrag){
        this.setState({openInhalt: true,
            url_beitrag:config.basisURL+"/beitrag/"+id_beitrag,
        });
        this.setState({openHome: false});
    }
    showProfil(id_person){
        this.setState({openProfil: true,
            url_beitrag:config.basisURL+"/person/"+id_person,
        });
        this.setState({openHome: false});
    }
    handleChildsShowThemengebiet(subsportartID, titelThemengebiet){    //console.log("in explore show themenbereich");
        this.setState({showThemengebiet: true,
            // !this.state.showThemengebiet,
                            fetch_url_search: config.basisURL+"/beitragBySubsportart?subsportart="+subsportartID,
                            titelThemengebiet: titelThemengebiet
                            });
    }
    handleThemengebietForChild(){
        this.setState({showThemengebiet: false});
    }
    sucheBeitrag(searchString) {
        if (searchString && searchString.length>0) {
            this.setState({
                showThemengebiet: !this.state.showThemengebiet,
                fetch_url_search: config.basisURL+"/beitragSuche?suche=" + searchString,
                titelThemengebiet: searchString
            });
        }
    }
    handleThemengebietForChild(){
        this.setState({showThemengebiet: false});
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
        //z.B. config.basisURL+"/themenbereichByTags?tags[]=9&tags[]=11";
        let default_fetch_url = config.basisURL+"/themenbereichByTags";
        let fetchURLwithFilter =default_fetch_url+addFilterToURL;
        this.setState({fetch_url_themenbereich:fetchURLwithFilter,
                             fetch_url_topstory:config.basisURL+"/beitragTopstory"+addFilterToURL,
                             fetch_url_todaysSpecial: config.basisURL+"/beitragTodaysSpecial"+addFilterToURL
            }
        );
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
        this.setState({fetch_url_themenbereich : config.basisURL+"/themenbereichByTags",
                            fetch_url_topstory:config.basisURL+"/beitragTopstory",
                            fetch_url_todaysSpecial: config.basisURL+"/beitragTodaysSpecial"
                        });
    };

}

export default Explore;