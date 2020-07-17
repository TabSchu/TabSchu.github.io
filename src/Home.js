import React, { Component } from 'react'
import BeitragHook from "./hooks/BeitragHook";
import HeaderBar from "./HeaderBar";
import FilterOverlaySportarten from "./FilterOverlaySportarten";
import InhaltHook from "./hooks/InhaltHook";
import config from "./config";


class Home extends Component {
    constructor(props){
        super(props);
        this.handleChildsOpenSportFilterOverlayClick = this.handleChildsOpenSportFilterOverlayClick.bind(this);
        this.handleHideSportFilterForChild = this.handleHideSportFilterForChild.bind(this);
        this.handleToggleFilterForChild = this.handleToggleFilterForChild.bind(this);

        this.showHome = this.showHome.bind(this);
        this.showInhalt = this.showInhalt.bind(this);
        this.state = {  showFilterSportOverlay: false,
                        sportartFilterActive: false,
                        openHome:true,
                        openInhalt:false,
                        filterSportartList: [
                            { id: '2', active: false },  { id: '3', active: false }, { id: '4', active: false },
                            { id: '5', active: false }, { id: '6', active: false }, { id: '7', active: false },
                            { id: '8', active: false }
                        ],
                        
                        url_beitrag:config.basisURL+"/beitrag",
                        fetch_url_filter_sportart:  config.basisURL+"/beitragBySportart"
        };
    }
    render() {
        let fetch_url = config.basisURL+"/beitragBySportart?";
        
        // let seite;
        let FilterOverlaySportartenElement;
        if (this.state.showFilterSportOverlay) {
            FilterOverlaySportartenElement = <FilterOverlaySportarten
                                                parentShallHideSportFilter={this.handleHideSportFilterForChild}
                                                parentShallToggleFilter={this.handleToggleFilterForChild}
                                                filterList={this.state.filterSportartList}
                                            />
        }

        // else {
           let seite;
            if(this.state.openHome){
                seite = <div>
            <HeaderBar parentShallHandleFilterClick={this.handleChildsOpenSportFilterOverlayClick}
                       filterActive={this.state.sportartFilterActive}
            />
            {FilterOverlaySportartenElement}
        <div id="content">
          <div>
                <BeitragHook /*merklisteActive={false}*/  fetch_url={this.state.fetch_url_filter_sportart}
                showInhalt={this.showInhalt} />
            </div>
        </div>
       </div>}
            if(this.state.openInhalt){
                seite = <div><InhaltHook showHome={this.showHome} fetch_url={this.state.url_beitrag}/></div>;
            }
    //    }
        return(
            <div>{seite}</div>
        )
    }
    showHome(){
        this.setState({openHome: true});
        this.setState({openInhalt: false});
    }

    showInhalt(id_beitrag){
        this.setState({openInhalt: true,
            url_beitrag:config.basisURL+"/beitrag/"+id_beitrag,
            openId:id_beitrag
        });
        this.setState({openHome: false});
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
        let default_fetch_url = config.basisURL+"/beitragBySportart";
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
        this.setState({fetch_url_filter_sportart : config.basisURL+"/beitragBySportart"});
    };


}
export default Home;