
import React, { Component } from 'react';
import SportlerProfil from './img/icon/profil.png'
import SucheIcon from './img/icon/suche_lupe.png'
import SearchBarFav from "./SearchBarFav";


class Favoriten extends Component{
     constructor(props){
          super(props);


          this.handleChildsOpenSerachBarClick = this.handleChildsOpenSerachBarClick.bind(this);
          this.handleSearchBarForChild = this.handleSearchBarForChild.bind(this);

          this.state = {
               showSearchBar: false
          }
     }
    render(){
     let searchBar;
     let showSearchBar = this.state.showSearchBar;
     if(showSearchBar){
          searchBar = <SearchBarFav parentShallHideSearchBar = {this.handleSearchBarForChild} />
      }

      let inhalt;

      inhalt = <div id="contentFavoriten">
          <div className="obereLeiste">
          <ul>
          <li><img src={SucheIcon} onClick={this.handleChildsOpenSerachBarClick}/> 
          </li>
          <li>+</li>
          <li>-</li>
          </ul>
          </div>
      <div className="untereLeiste">
          <ul>
          <li>Sportarten</li>
          <li>Sportler</li>
          <li>Verein</li>
          </ul>
      </div>
      <div id="Favoriten">
          <div id="Sportlerzeile">
               <div className="Sportler">
               <img src={SportlerProfil}/>
               Dana Giesel                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Bastian Steiger                       
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Alex Mertens                       
          </div>
          </div>
          <div id="Sportlerzeile">
               <div className="Sportler">
               <img src={SportlerProfil}/>
               Carsten Klug                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Peter Weser                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Volker Racho                        
          </div>
          </div>
          <div id="Sportlerzeile">
               <div className="Sportler">
               <img src={SportlerProfil}/>
               Maria Sando                       
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Tim Campen                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Max Clausen                       
          </div>
          </div>
          <div id="Sportlerzeile">
               <div className="Sportler">
               <img src={SportlerProfil}/>
               Felix Zweier                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Sarah Raftsen                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Petra Denna                        
          </div>
          </div>
          <div id="Sportlerzeile">
               <div className="Sportler">
               <img src={SportlerProfil}/>
               Carla Sommer                       
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Peter Meyer                        
          </div>
          <div className="Sportler">
               <img src={SportlerProfil}/>
               Roman Tisch                        
          </div>
          </div>

          </div>
          {searchBar}
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
}

export default Favoriten;