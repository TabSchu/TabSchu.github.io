
import React, { Component } from 'react';
import SportlerProfil from './img/icon/profil.png'
import SucheIcon from './img/icon/suche_lupe.png'
import SearchBarFav from "./SearchBarFav";
import Sportler from "./Sportler"
import SportlerBearbeiten from './SportlerBearbeiten';
import ZurückFertigBar from './ZurückFertigBar';
import FavoritenPersonHook from "./hooks/FavoritenPersonHook";


class Favoriten extends Component{

     
     constructor(props){
          super(props);

          this.handleChildsOpenSportlerBearbeitenClick = this.handleChildsOpenSportlerBearbeitenClick.bind(this);
          this.handleSportlerBearbeitenForChild = this.handleSportlerBearbeitenForChild.bind(this);


          this.handleChildsOpenSerachBarClick = this.handleChildsOpenSerachBarClick.bind(this);
          this.handleSearchBarForChild = this.handleSearchBarForChild.bind(this);

          this.handleChildsOpenZurückFertigBarClick = this.handleChildsOpenZurückFertigBarClick.bind(this);
          this.handleZurückFertigBarForChild = this.handleZurückFertigBarForChild.bind(this);

          this.twoFunctions = this.twoFunctions.bind(this);

          this.state = {
               showSearchBar: false,
               showSportlerBearbeiten: false,
               showZurückFertig: false
          }
     }

     
     twoFunctions(){
          this.handleChildsOpenSportlerBearbeitenClick();
           this.handleChildsOpenZurückFertigBarClick();

     }
    render(){
     const style = {
          opacity: 0.5
     }
     let searchBar;
     let showSearchBar = this.state.showSearchBar;
     if(showSearchBar){
          searchBar = <SearchBarFav parentShallHideSearchBar = {this.handleSearchBarForChild} />
      }

     let sportlerBearbeiten;
     let showSportlerBearbeiten = this.state.showSportlerBearbeiten;
     let fetch_url_person_favoriten = "http://localhost:8080/personFavoritenByUser?id_person=1";

     if(showSportlerBearbeiten){

          sportlerBearbeiten = <SportlerBearbeiten parentShallHideSportlerBearbeiten = {this.handleSportlerBearbeitenForChild} />
          console.log("läuft auch")

     } else {
          sportlerBearbeiten =<div>

                             <FavoritenPersonHook fetch_url={fetch_url_person_favoriten}/>

                         </div>
     }

     let zurückFertigBar;
     let showZurückFertig = this.state.showZurückFertig;

     if(showZurückFertig){
          zurückFertigBar = <ZurückFertigBar parentShallHideZurückFertigBar = {this.handleZurückFertigBarForChild}
           parentShallHideSportlerBearbeiten = {this.handleSportlerBearbeitenForChild}/>
     }

      let inhalt;

      inhalt = <div id="contentFavoriten">
          <div className="obereLeiste">
          <ul>
          <li><img src={SucheIcon} onClick={this.handleChildsOpenSerachBarClick}/> 
          </li>
          <li onClick = {this.twoFunctions}>+</li>
          <li>-</li>
          </ul>
          </div>
      <div className="untereLeiste">
          <ul>
          <li style={{opacity: 0.5}}>Sportarten</li>
          <li>Sportler</li>
          <li style={{opacity: 0.5}}>Verein</li>
          </ul>
      </div>
      <div id="Favoriten">
          

          
          {searchBar}
          {sportlerBearbeiten}
          {zurückFertigBar}
          
          </div>
          </div>

          
          return(
            
                
                    
            <div>{inhalt}</div>
            
            
        )
    
}

handleChildsOpenSerachBarClick(){
     this.setState({showSearchBar: !this.state.showSearchBar});
 }

 handleSearchBarForChild(){
     this.setState({showSearchBar: false});
 }

 handleChildsOpenSportlerBearbeitenClick(){
      console.log("läuft");
      this.setState({showSportlerBearbeiten: true})
 }


 handleSportlerBearbeitenForChild(){
      this.setState({showSportlerBearbeiten: false})
 }

 handleChildsOpenZurückFertigBarClick(){
      this.setState({showZurückFertig: !this.showZurückFertig})
 }
 handleZurückFertigBarForChild(){
      this.setState({showZurückFertig: false})
 }
}

export default Favoriten;