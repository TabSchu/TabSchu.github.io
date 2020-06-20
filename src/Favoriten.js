
import React, { Component } from 'react';
import SportlerProfil from './img/icon/profil.png'




class Favoriten extends Component{
    render(){
        return(
            <div id="contentFavoriten">
                <div className="obereLeiste">
                    <ul>
                    <li>
                        S
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
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    </div>
                    <div id="Sportlerzeile">
                         <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    </div>
                    <div id="Sportlerzeile">
                         <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    </div>
                    <div id="Sportlerzeile">
                         <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    </div>
                    <div id="Sportlerzeile">
                         <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                    <div className="Sportler">
                         <img src={SportlerProfil}/>
                         Volker Racho                        
                    </div>
                </div>

                </div>
                </div>
                
                    
            
            
            
        )
    }
}

export default Favoriten;