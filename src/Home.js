import React, { Component } from 'react'
import BeitragHook from "./hooks/BeitragHook";
import HeaderBar from "./HeaderBar";
import FilterOverlaySportarten from "./FilterOverlaySportarten";
import { Link } from "react-router-dom";


class Home extends Component {
    constructor(props){
        super(props);
        this.handleChildsOpenSportFilterOverlayClick = this.handleChildsOpenSportFilterOverlayClick.bind(this);
        this.handleHideSportFilterForChild = this.handleHideSportFilterForChild.bind(this);
        this.handleToggleFilterForChild = this.handleToggleFilterForChild.bind(this);

        this.state = {  showFilterSportOverlay: false,
                        sportartFilterActive: false,
                        filterSportartList: [
                            { id: '2', active: false },  { id: '3', active: false }, { id: '4', active: false },
                            { id: '5', active: false }, { id: '6', active: false }, { id: '7', active: false },
                            { id: '8', active: false }
                        ],
                        fetch_url_filter_sportart:  "http://localhost:8080/beitragBySportart"
        };
    }
    render() {
        let fetch_url = "http://localhost:8080/beitragBySportart?";

        let FilterOverlaySportartenElement;
        if (this.state.showFilterSportOverlay) {
            FilterOverlaySportartenElement = <FilterOverlaySportarten
                                                parentShallHideSportFilter={this.handleHideSportFilterForChild}
                                                parentShallToggleFilter={this.handleToggleFilterForChild}
                                                filterList={this.state.filterSportartList}
                                            />
        }

        return(
            <div>
                <HeaderBar parentShallHandleFilterClick={this.handleChildsOpenSportFilterOverlayClick}
                           filterActive={this.state.sportartFilterActive}
                />
                {FilterOverlaySportartenElement}
            <div id="content">
              
                <div><Link to="/artikel">
                    <BeitragHook /*merklisteActive={false}*/  fetch_url={this.state.fetch_url_filter_sportart}/>
                    </Link>
                </div>

            </div>
           </div>
           
        )
    }

    handleChildsOpenSportFilterOverlayClick() { //  console.log("Filter clicked in my Child Component");
        this.setState({showFilterSportOverlay: !this.state.showFilterSportOverlay});
    }

    handleHideSportFilterForChild() { //  console.log("from my Child Component: Parent shall hide filter");
        this.setState({showFilterSportOverlay: false});
    }

    handleToggleFilterForChild(filter) {
        if (filter===0){
            this.setState({  sportartFilterActive: false });
            this.resetAllFilterItemsToFalse();
            return;
        }
        this.toggleStatusFilterItemAndSetURL(filter);
    }

    toggleStatusFilterItemAndSetURL = filteredID => {
        this.setState(
            state => {
                const filterSportartList=[];
                this.state.filterSportartList.forEach(function(item) {
                    if(item.id==filteredID){
                        item.active = !item.active;
                    }
                    filterSportartList.push(item);
                });
                return { filterSportartList };
            },
            //Callback: When asynchronous setStatus is finished:
            () => {
                this.setUrlBeitraege();
                this.setWhetherFilterActive();
            }
        );
    };

    setWhetherFilterActive(){
        let activeCounter = 0;
        this.state.filterSportartList.forEach(function(item) {
            if(item.active){
                activeCounter++;
            }
        });
        if(activeCounter>0){
            this.setState({sportartFilterActive: true });
        } else {
            this.setState({sportartFilterActive: false });
        }
    };

    setUrlBeitraege(){
        let addFilterToURL = "?";
        this.state.filterSportartList.forEach(function(item) {
            if(item.active){
                addFilterToURL += "sportart[]="+item.id+"&";
            }
        });
        addFilterToURL = addFilterToURL.slice(0, -1);
        //z.B. "http://localhost:8080/beitragBySportart?sportart[]=2&sportart[]=3";
        let default_fetch_url = "http://localhost:8080/beitragBySportart";
        let fetchURLwithFilter =default_fetch_url+addFilterToURL;
        this.setState({fetch_url_filter_sportart:fetchURLwithFilter});
        console.log(fetchURLwithFilter);
    }

    resetAllFilterItemsToFalse () {
        this.setState(state => {
            const filterSportartList=[];
            this.state.filterSportartList.forEach(function(item) {
                item.active = false;
                filterSportartList.push(item);
            });
            return { filterSportartList };
        });
        // reset filter in url:
        this.setState({fetch_url_filter_sportart : "http://localhost:8080/beitragBySportart"});
    };


}
export default Home;