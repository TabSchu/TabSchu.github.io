import React, { Component, useState } from 'react'
import HeaderBar from "./HeaderBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Artikel extends Component { 
    constructor(props){
        super(props);
        this.state = {
            hidevalue : 1
        };
        this.changeNavItem = this.changeNavItem.bind(this);
    }

    componentDidMount(){
        this.changeNavItem(this.props.location.pathname);
       }
       
       componentWillReceiveProps(nextProps){
        if(this.props.location.pathname !== nextProps.location.pathname){
          this.changeNavItem(nextProps.location.pathname); 
         }
       }
       
       changeNavItem(currentRoute){
         if(currentRoute == "\artikel"){
              this.setState({
                 hideValue : 0
              });
           }
       }

    render() {
        return(
            <Router>
            <div id="contentArtikel">
            <HeaderBar/>
                <div id="banner"></div>
                <div id="titel">
                    <h5>Breaking News:</h5>
                    <h3>Neuer Chef im Verein - <br></br>
                        Jonny übernimmt!</h3>
                </div>
                <div id="autor">ICON Rainald Becker<div className="icon">ICON </div></div>
                <div id="text">In Bremen geht es wieder einmal rund. Auf dem Tanzparkett präsentieren sich die besten Tanzformationen der Welt in der Kategorie Latein und tanzen um den Titel des Weltmeisters.
                    <br></br>
                    Die Lateinformation des Bremer Grün Gold Clubs ist international das Maß aller Dinge: sieben Mal Weltmeister, zuletzt vier Mal in Folge. Auch in diesem Jahr gilt der Titelverteidiger mit Heimvorteil als Favorit.
                    Für Spannung ist dennoch gesorgt, denn die Konkurrenz brennt darauf, endlich einmal diese Bremer Formation zu schlagen – ein Tanzabend im Hochglanzformat.</div>
                <div id="info">
                    <div id="hashtag">#Meister #tanzen</div>
                    <h3>Generelle Infos</h3>
                    <ul>
                        <li>1. Deutsche Liga</li>
                        <li>Grün Gold Club Bremen</li>
                    </ul>
                </div>
                <h3>Ähnliche Beiträge: </h3>
                <div className="stories">
                    <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                    {/* <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                    <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div> 
                    <div className="story"><div className="boxcontent"><h3>story</h3><h4>David</h4></div></div>                  */}
                </div>
            </div>
            <Switch> 
                <Route path="/">
                    {/* < /> */}
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

export default Artikel;