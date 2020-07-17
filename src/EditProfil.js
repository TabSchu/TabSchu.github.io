
// import 'materialize-css'
// import {TextInput} from 'react-materialize'
import { isThisTypeNode } from 'typescript'
import React, { Component, useState } from 'react'
import HeaderBarProfilEdit from "./HeaderBarProfilEdit"
import HeaderBarMyZphere from "./HeaderBarMyZphere"
import Kamera from "./img/icon/kamera.png";
import Galerie from "./img/icon/galerie.png";
import Muelleimer from "./img/icon/Muelleimer.png";
import ProfilnameHook from './hooks/ProfilnameHook';
import config from "./config";




class EditProfil extends Component{

    //let fetch_url_profilname = config.basisURL+"/userData"
    //<ProfilnameHook fetch_url = {fetch_url_profilname} />

    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.ladeDaten = this.ladeDaten.bind(this);

        
            this.state ={
                vorname: '',
                nachname: '',
                geburtsdatum: '',
                geschlecht: null,
                wohnort:''
            }
        }
        
        handleInputChange (e) {
            e.preventDefault()
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        handleSubmit(e){
            const userData = this.state;
            console.log(userData)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userDaten: userData })
            };
            fetch(config.basisURL+'/updateUser', requestOptions)
                .then(response => response.json());
                //.then(data => this.setState({ postId: data.id }));


            e.preventDefault()
            window.location.reload();
            
        }

        componentDidMount(){
    
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(config.basisURL+'/userData', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ vorname: data[0].vorname,  nachname: data[0].nachname,  geburtsdatum: data[0].geburtsdatum,  wohnort: data[0].wohnort }))
                
            
        }
        



        

        //setStateFromDataBase(){
        //    this.setState({vorname: <ProfilnameHook fetch_url = {fetch_url_profilname} />})
        //}

        

        //<div > <p onClick = {this.ladeDaten}>wwedesgsgtrg</p></div>
    

    render(){
       
        let geschlecht = this.state.geschlecht;
        let fetch_url_profilname = config.basisURL+"/userData"
        
        
        
        return(
            
            
            <div id="contentProfil"> 
                <form onSubmit = {this.handleSubmit}>
                    
                <div id="profil">Profilbild bearbeiten<div className="icons"> <img src={Kamera}/> <img src={Galerie}/> <img src={Muelleimer}/>  </div></div> 
                
                    <p>Vorname</p>
                    <p><input type='input' class="form__field" name ='vorname'  onChange = {this.handleInputChange} Value={this.state.vorname} /> </p>
                    <p>Nachname</p>
                    <p><input type='input' class="form__field" name='nachname' onChange =  {this.handleInputChange} Value={this.state.nachname} /></p>
                    <p>Geburtsdatum</p>
                    <p><input type='input' class="form__field" name ='alter'    onChange = {this.handleInputChange} Value={this.state.geburtsdatum} /> </p>
                    <p>Geschlecht</p>
                    <select name="geschlecht" value={geschlecht} onChange={this.handleInputChange} >
                        <option value ="männlich" name="geschlecht" > männlich</option>
                        <option value ="weiblich" name="geschlecht">  weiblich</option>
                        <option value ="divers"   name="geschlecht" > divers </option>
                    </select>
                    <p>Lebt in</p>
                    
                    <p><input type='input' class="form__field" name ='wohnort'  onChange = {this.handleInputChange} Value={this.state.wohnort} /> </p>
                    <button>Speichern</button>
                    </form>
               
                </div>
            
            

    
            
            
        )
    }

}


export default EditProfil;