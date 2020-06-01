import React, { Component } from 'react'
import HeaderBar from "./HeaderBar";

class Explore extends Component {

    render() {
        return(
            <div>
            <HeaderBar/>
            

            <div id="content">
                <h3>sportarten</h3>
                <div className="middleBlock">
                    <div className="middleBox">
                        <h4>Breakdance</h4>
                    </div>
                    <div className="middleBox">
                        <h4>Breakdance</h4>
                    </div> 
                    <div className="middleBox">
                        <h4>Breakdance</h4>
                    </div> 
                    <div className="middleBox">
                        <h4>Breakdance</h4>
                    </div>     
                </div>
                <h3>sportler</h3>
                <div className="smallBlock">
                    <div className="smallBox">
                            <h4>Ben</h4>
                    </div> 
                    <div className="smallBox">
                            <h4>Ben</h4>
                    </div> 
                    <div className="smallBox">
                            <h4>Ben</h4>
                    </div>
                    <div className="smallBox">
                            <h4>Ben</h4>
                    </div>
                    <div className="smallBox">
                            <h4>Ben</h4>
                    </div> 
                    <div className="smallBox">
                            <h4>Ben</h4>
                    </div> 
                </div>
                <h3>top story</h3>
                <div className="bigBlock">
                    <div className="bigBox">
                            <h4>Background Story</h4>
                    </div>
                </div>
                <div className="stories">
                    <div className="story"><h3>story</h3><h4>David</h4></div>
                    <div className="story"><h3>story</h3><h4>David</h4></div>
                    <div className="story"><h3>story</h3><h4>David</h4></div>
                    <div className="story"><h3>story</h3><h4>David</h4></div>                
            </div>
            </div>
            </div>
        )
    }
}

export default Explore;