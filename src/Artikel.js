import React, { Component, useState } from 'react'
import HeaderBar from "./HeaderBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import SportlerProfil from './img/icon/profil.png'
  import MerklisteIcon from './img/icon/Merkliste_leer.png'
  import TeilenIcon from './img/icon/Teilen.png'
  import Zurueck    from './img/icon/Zurueck.png'
  import Maria from './img/maria2.png'
  import StoryHook from "./hooks/StoryHook";

class Artikel extends Component { 
    /*constructor(props){
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
       }*/

    render() {
        let fetch_url_stories = "http://localhost:8080/beitrag";
        return(
            <div>
            <div id="banner">
                <div id="zurueck"><Link to="/" > <img src={Zurueck} /></Link></div>
                {/* Link to="/explore" */}
            </div>
            <div id="contentArtikel" >                
                <div id="titel">
                    <h5>Breaking News:</h5>
                    <h3>Weltmeisterschaft der Tanz-Formation Latein</h3>
                </div>
                <div id="autor"><img src={SportlerProfil}/> Katharina Schövel<div className="icon"> <img src={TeilenIcon}/> <img src={MerklisteIcon}/>  </div></div>
                <div id="text">Samstag, 10. Dezember 2016
                    NDR/RB-Fernsehen
                    Samstag, 10. Dezember 2016,
                    23.10-0.15 Uhr Livesendung des Finales im NDR/RB-Fernsehen
                    ab 20.45 Uhr Livestream der Zwischenrunde auf www.radiobremen.de
                    Sportclub live:
                    Weltmeisterschaft der Tanz-Formationen Latein
                    Übertragung aus der Bremer Stadthalle
                    In Bremen geht es wieder einmal rund. Auf dem Tanzparkett präsentieren sich die besten Tanzformationen der Welt in der Kategorie Latein und tanzen um den Titel des Weltmeisters.
                    Die Lateinformation des Bremer Grün Gold Clubs ist international das Maß aller Dinge: sieben Mal Weltmeister, zuletzt vier Mal in Folge. Auch in diesem Jahr gilt der Titelverteidiger mit Heimvorteil als Favorit.
                    Für Spannung ist dennoch gesorgt, denn die Konkurrenz brennt darauf, endlich einmal diese Bremer Formation zu schlagen – ein Tanzabend im Hochglanzformat.
                    Kommentar: Carsten Flügel
                    Moderation: Felix Krömer
                    In einem unkommentierten Livestream auf www.radiobremen.de können Tanzsportbegeisterte die Zwischenrunde ab 20.45 Uhr verfolgen.
                    Das Finale zeigt das NDR/RB-Fernsehen von 23.10 bis 00.15 Uhr.
                    </div>
                <div id="info">
                    <div id="hashtag">#Meister #tanzen</div>
                    <h3>Generelle Infos</h3>
                    <ul>
                        <li><img src={SportlerProfil} className="center" align="middle" />1. Deutsche Liga</li>
                        <li><img src={SportlerProfil} className="center" align="middle" />Grün Gold Club Bremen</li>
                    </ul>
                    <h3>Ähnliche Beiträge: </h3>
                </div>
                
                <div style={{width:"40vh", overflowX:"scroll"}}>
                <StoryHook fetch_url={fetch_url_stories}/>
                                
                </div>
            </div>
            </div>
        )
    }
}

export default Artikel;