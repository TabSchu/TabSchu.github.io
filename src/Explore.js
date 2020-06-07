import React, { Component } from 'react'
import HeaderBar from "./HeaderBar";
import Artikel from "./Artikel";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Explore extends Component {


    render() {
        return(
            // { this.state.showme? this.state.hideValue && 
            <Router>
            <div id="explore">
            <HeaderBar/>
                <div id="content">
                    <h3>sportarten</h3>
                    
                    <div className="middleBlock">
                        <div className="middleBox">
                            <div className="boxcontent"><Link to="/artikel">
                            <h4>Breakdance</h4></Link>
                            </div>
                        </div>
                        <div className="middleBox">
                            <div className="boxcontent">
                            <h4>Breakdance</h4>
                            </div>
                        </div> 
                        <div className="middleBox">
                            <div className="boxcontent">
                            <h4>Breakdance</h4>
                            </div>
                        </div> 
                        <div className="middleBox">
                            <div className="boxcontent">
                            <h4>Breakdance</h4>
                            </div>
                        </div>     
                    </div>
                    <h3>sportler</h3>
                    <div className="smallBlock">
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div>
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div>
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                        <div className="smallBox">
                            <div className="boxcontent">
                                <h4>Ben</h4>
                            </div>
                        </div> 
                    </div>
                    <h3>top story</h3>
                    <div className="bigBlock">
                        <div className="bigBox">
                                <h4>Background Story</h4>
                        </div>
                    </div>
                    <div className="stories">
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                        <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div>                 
                    </div>
                </div>
            </div>
            <Switch> 
                <Route path="/Artikel" component={Artikel} exact>
                    {/* < Artikel/> */}
                </Route>
                <Route path="/">
                    {/* < /> */}
                </Route>
                <Route path="/">
                    {/* < /> */}
                </Route>
            </Switch>
        </Router>
        )
    }
}

export default Explore;