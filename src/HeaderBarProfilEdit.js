import React, { Component } from 'react'
import ProfilBildIcon from './img/profilMenueleiste.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EditProfil from './EditProfil.js'

class HeaderBarProfilEdit extends Component{

  constructor(props){
    super(props)

    this.state = {
      Name : "Max Mustermann"
    }

  }


  onChangeName(newName){
    this.setState({
      Name : newName
    })

  }


render(){
    return(
        <div id="HeaderBarProfilEdit">
            <div>
            <ul>
                <Link to="/merkliste"><li> X </li></Link>                
                <h1>{this.state.Name}</h1>
                <h2><img src={ProfilBildIcon}/></h2>
            </ul>

            </div>
        </div>
    )
  }
}


export default HeaderBarProfilEdit;