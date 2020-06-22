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
import {forEach} from "react-bootstrap/cjs/ElementChildren";
import Themengebiet from './Themengebiet';
import Filter_leer from "./img/icon/Filter_leer.png";
import Suche from "./img/icon/suche_lupe.png";

class Explore extends Component {

    constructor(props) {
        super(props);
        this.handleChildsOpenFilterOverlayClick = this.handleChildsOpenFilterOverlayClick.bind(this);
        this.handleHideFilterForChild = this.handleHideFilterForChild.bind(this);

        this.handleToggleFilterForChild = this.handleToggleFilterForChild.bind(this);
        this.toggleStatusFilterItem = this.toggleStatusFilterItem.bind(this);
        this.resetAllFilterItemsToFalse = this.resetAllFilterItemsToFalse.bind(this);
        this.handleChildsShowThemengebiet = this.handleChildsShowThemengebiet.bind(this);
        this.setUrlThema = this.setUrlThema.bind(this);

        this.state = {  showFilterOverlay: false,
                        tagFilterActive: false,
                        showThemengebiet: false,
                  //      filter_1: false, filter_2: false, filter_3: false, filter_4: false, filter_5: false,
                   //     filter_6: false, filter_7: false, filter_8: false, filter_9: false, filter_10: false, filter_11: false,
            filterTagList: [
                { id: '1', active: false }, { id: '2', active: false },  { id: '3', active: false }, { id: '4', active: false },
                { id: '5', active: false }, { id: '6', active: false }, { id: '7', active: false },
                { id: '8', active: false }, { id: '9', active: false },  { id: '10', active: false }, { id: '11', active: false }
            ],

        };
        let themenbereiche;
    }


    render() {
        let fetch_url_newest_beitrag = "http://localhost:8080/beitrag/newest";
        let fetch_url_stories = "http://localhost:8080/beitrag";
        let fetch_url_subsportart = "http://localhost:8080/subsportart";
        let fetch_url_person_group = "http://localhost:8080/person";
        let fetch_url_themenbereich = "http://localhost:8080/themenbereichByTags"; //themenbereich";
        let filterOverlayTags;
        let showFilterOverlay = this.state.showFilterOverlay;
        if (showFilterOverlay) {
            filterOverlayTags = <FilterOverlayTags parentShallHideFilter={this.handleHideFilterForChild}
                                                   parentShallToggleFilter={this.handleToggleFilterForChild}/>
        } //else {   console.log("don't show FilterOverlay");  }
        
        let content;
        let tagFilterActive = this.state.tagFilterActive; //this.state.filter_1;//
       // let tagFilterUpdated = this.state.tagFilterUpdated;
        let themenbereiche;
       /* if(tagFilterUpdated){
            this.setState({tagFilterUpdated: false });
            themenbereiche = '';
        } */
        if (!tagFilterActive){
            themenbereiche =  <ThemenbereichHook fetch_url={fetch_url_themenbereich} filterListe={this.state.filterTagList} />;
            content = <div id="content">
                        <h3>sportarten</h3>
                        <SubSportartHook parentShallForGrandChildsShowThemengebiet={this.handleChildsShowThemengebiet} fetch_url={fetch_url_subsportart}/>
                        <h3>sportler</h3>
                        <PersonHook fetch_url={fetch_url_person_group}/>
                        <Link to="/artikel"> <h3>top story</h3></Link>
                        <BeitragHook  fetch_url={fetch_url_newest_beitrag}/>
                        <h3  className="titelThemenbereich" >Themenbereich</h3>
                        <StoryHook fetch_url={fetch_url_stories}/>
                        {themenbereiche}
                    </div>
        } else {
            themenbereiche =  <ThemenbereichHook fetch_url={fetch_url_themenbereich} filterListe={this.state.filterTagList} />;
            content = <div id="content">
                <Link to="/artikel"><h3>top story</h3></Link>
                <BeitragHook fetch_url={fetch_url_newest_beitrag}/>
                <h3 className="titelThemenbereich">Themenbereich</h3>
                <StoryHook fetch_url={fetch_url_stories}/>
                {themenbereiche}
            </div>
        }
        let seite;
        if(!this.state.showThemengebiet){
            seite = <div id="explore">
            {/* <HeaderBar parentShallHandleFilterClick={this.handleChildsOpenFilterOverlayClick} /> */}

            <div id="headerBar">
                <ul>
                    <li><img src={Suche}/></li>                    
                    <li>entdecken</li>
                    <li>
                        <img src={Filter_leer}  onClick={this.handleChildsOpenFilterOverlayClick} />
                    </li>
                </ul>
            </div>
            <div id="Beitragsart">
                <ul style={{width: "auto", display: "flex", overflowX: "scroll", padding:"0 10px"}}>
                    <li style={{width: "auto", margin:"0 10px"}}>Tutorials</li>
                    <li style={{width: "auto", margin:"0 10px"}}>DIY</li>
                    <li style={{width: "auto", margin:"0 10px"}}>runnershigh</li>
                    <li style={{width: "auto", margin:"0 10px"}}>#FreshAndFruity</li>
                    <li style={{width: "auto", margin:"0 10px"}}>Fortnite</li>
                    <li style={{width: "auto", margin:"0 10px"}}>Corona</li>
                </ul>
            </div>

            {filterOverlayTags}
            {content}
            </div>
        }else{
            seite = <Themengebiet  parentShallForChildsShowThemengebiet={this.handleChildsShowThemengebiet}/>;
            // parentShallHandleShowThemengebiet={this.handleChildsShowThemengebiet}/>;
        }

        return(
               <div>{seite}</div>
        )
    }
    handleChildsShowThemengebiet(){
        console.log("in explore show themenbereich");
        // this.setState({showThemengebiet: true});
        this.setState({showThemengebiet: !this.state.showThemengebiet});
        
    }
    handleChildsOpenFilterOverlayClick() {
       //  console.log("Filter clicked in my Child Component");
        this.setState({showFilterOverlay: !this.state.showFilterOverlay});
    }

    handleHideFilterForChild() {
      //  console.log("from my Child Component: Parent shall hide filter");
        this.setState({showFilterOverlay: false});
        this.state.filterTagList.forEach(function(item) {
      //     console.log( item.id + " : " + item.active );
        });
        this.themenbereiche =  <ThemenbereichHook fetch_url={this.fetch_url_themenbereich} filterListe={this.state.filterTagList} />
    }

    handleToggleFilterForChild(filter) {
       //  console.log("from my Child Component: Parent shall toggle filter:"+filter);
        if (filter===0){
            this.setState({  tagFilterActive: false }); //showFilterOverlay: false,
            this.resetAllFilterItemsToFalse();
           // this.themenbereiche =  <ThemenbereichHook fetch_url={this.fetch_url_themenbereich} filterListe={this.state.filterTagList} />
    //        console.dir(this.state);
            return;
        } //tagFilterActive: true
        this.setState({tagFilterActive: true }); //  showFilterOverlay: false });
        this.toggleStatusFilterItem(filter);
       /* console.dir(this.state.filterTagList);
        this.state.filterTagList.forEach(function(item) {
            console.log(  " ForChild --> bei "+ item.id + " " + item.active);
        }); */
      //  this.themenbereiche =  <ThemenbereichHook fetch_url={this.fetch_url_themenbereich} filterListe={this.state.filterTagList} />
        this.setUrlThema();
    }


    toggleStatusFilterItem = filteredID => {
       // console.log("in toggleStatusFilterItem:");
      //  console.dir(this.state.filterTagList);
       /* this.state.filterTagList.forEach(function(item) {
            if(item.id==filteredID){
                item.active = !item.active;
            }
        }); */
        this.setState(state => {
            const filterTagList=[];
            this.state.filterTagList.forEach(function(item) {
                if(item.id==filteredID){
                    item.active = !item.active;
                }  // if(item.id==6){ item.active = true;}
                filterTagList.push(item);
            });

            return {
                filterTagList
            };
        });
   //     console.log("am Ende von toggleStatusFilterItem:");
   //     console.dir(this.state.filterTagList);
       // this.setUrlThema();
    };

    setUrlThema(){
       // console.log("in setUrlThema:");
       // console.dir(this.state.filterTagList);
        let filterListe = this.state.filterTagList;
      //  console.log("in setUrlThema: let filterListe:");
      //  console.dir(filterListe);
        let addFilterToURL = "?";
       // console.log(this.state.filterTagList);
        this.state.filterTagList.forEach(function(item) {
   //         console.log(addFilterToURL + " --> bei "+ item.id + " " + item.active);
            if(item.active){
                addFilterToURL += "tags[]="+item.id+"&";
            }
       //     console.log(addFilterToURL);
        });

        let url = filterListe.filter(function(obj) {
                return obj.active;
            });
       // console.log("url"+url);

        let testMap = this.state.filterTagList.map(function (value, index, array) {
            return <h1 key={index}>{value}</h1>
        });
        //console.log("testMap"+testMap);

        let testMap2 = this.state.filterTagList.filter(function(obj) {
            return obj.active;
        }).map(item => (
            item.id
        ));
     //   console.log("testMap2: "+testMap2);


        /*
        this.state.list.map(item => (
            <li key={item.id}>
                The person is {item.age} years old.
                <button
                    type="button"
                    onClick={() => this.onRemoveItem(item.id)}
                >
                    Remove
                </button>
            </li>
        ));

*/




        //this.state.filterTagList
       // addFilterToURL += filteredID
        addFilterToURL = addFilterToURL.slice(0, -1);
        //"http://localhost:8080/themenbereichByTags?tags[]=9&tags[]=11";
        let my_fetch_url = "http://localhost:8080/themenbereichByTags";
        let fetchURLwithFilter =my_fetch_url+addFilterToURL;
     //   console.log("setUrlThema: fetchURLwithFilter:");
     //   console.log(fetchURLwithFilter);
    }

    resetAllFilterItemsToFalse () {
        this.setState(state => {
            const filterTagList=[];
            this.state.filterTagList.forEach(function(item) {
                    item.active = false;
               // if(item.id==6){ item.active = true;}
                filterTagList.push(item);
            });
            // b={};  // console.log('test array in close:');  //console.dir(a);

           return {
               filterTagList
            };
        });
    };
    onRemoveItem = id => {
        this.setState(state => {
            const list = state.list.filter(item => item.id !== id);

            return {
                list,
            };
        });
    };

    onUpdateItems = () => {
        this.setState(state => {
            const list = state.list.map(item => item + 1);

            return {
                list,
            };
        });
    };
    /*
    * {this.state.list.map(item => (
            <li key={item}>The person is {item} years old.</li>
          ))}
          *
          *
          * {this.state.list.map(item => (
            <li key={item.id}>
              The person is {item.age} years old.
              <button
                type="button"
                onClick={() => this.onRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
    * */

}

export default Explore;