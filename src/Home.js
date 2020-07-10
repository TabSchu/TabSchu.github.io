import React, { Component } from 'react'
import Artikel from "./Artikel";
import BeitragHook from "./hooks/BeitragHook";
import HeaderBar from "./HeaderBar";
import FilterOverlaySportarten from "./FilterOverlaySportarten";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Home extends Component {
    constructor(props){
        super(props);
        this.handleChildsOpenSportFilterOverlayClick = this.handleChildsOpenSportFilterOverlayClick.bind(this);
        this.handleHideSportFilterForChild = this.handleHideSportFilterForChild.bind(this);

        this.state = {  showFilterSportOverlay: false};
    }
    render() {
        let fetch_url = "http://localhost:8080/beitrag/";

        let FilterOverlaySportartenElement;
        if (this.state.showFilterSportOverlay) {
            FilterOverlaySportartenElement = <FilterOverlaySportarten parentShallHideSportFilter={this.handleHideSportFilterForChild} />
        }

        return(
            <div>
                <HeaderBar parentShallHandleFilterClick={this.handleChildsOpenSportFilterOverlayClick} />
                {FilterOverlaySportartenElement}
            <div id="content">
              
                <div><Link to="/artikel">
                    <BeitragHook /*merklisteActive={false}*/  fetch_url={fetch_url}/>
                    </Link>
                </div>

            </div>
           </div>
           
        )
    }

    handleChildsOpenSportFilterOverlayClick() {
        //  console.log("Filter clicked in my Child Component");
        this.setState({showFilterSportOverlay: !this.state.showFilterSportOverlay});
    }

    handleHideSportFilterForChild() {
        //  console.log("from my Child Component: Parent shall hide filter");
        this.setState({showFilterSportOverlay: false});
    }


}
export default Home;