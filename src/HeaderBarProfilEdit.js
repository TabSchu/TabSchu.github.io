import React, { Component } from 'react'
import ProfilBildIcon from './img/profilMenueleiste.png'


class HeaderBarProfilEdit extends Component{




render(){
    return(
        <div id="HeaderBarProfilEdit">
            <div>
            <ul>
                <li>X</li>
                <li>fertig</li>
                <h1>Max Mustermann</h1>
                <h2><img src={ProfilBildIcon}/></h2>
            </ul>

            </div>
        </div>
    )
  }
}


export default HeaderBarProfilEdit;