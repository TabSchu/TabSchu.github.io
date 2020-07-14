
// import 'materialize-css'
// import {TextInput} from 'react-materialize'
import { isThisTypeNode } from 'typescript'
import React, { Component, useState } from 'react'
import HeaderBarProfilEdit from "./HeaderBarProfilEdit"
import HeaderBarMyZphere from "./HeaderBarMyZphere"
import Kamera from "./img/icon/kamera.png";
import Galerie from "./img/icon/galerie.png";
import Muelleimer from "./img/icon/Muelleimer.png";




class EditProfil extends Component{

    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
            this.state ={
                vorname: '',
                nachname: '',
                alter: '',
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
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userDaten: userData })
            };
            fetch('http://localhost:8080/updateUser', requestOptions)
                .then(response => response.json());
                //.then(data => this.setState({ postId: data.id }));


            e.preventDefault()
            
        }

        


    

    render(){
       
       
        
        return(
            <div id="contentProfil"> 

                <form onSubmit = {this.handleSubmit}>
        
                   

                <div id="profil">Profilbild bearbeiten<div className="icons"> <img src={Kamera}/> <img src={Galerie}/> <img src={Muelleimer}/>  </div></div> 
                
                    <p>Vorname</p>
                    <p><input type='input' class="form__field" name ='vorname'  onChange = {this.handleInputChange}    /> </p>
                    <p>Nachname</p>
                    <p><input type='input' class="form__field" name='nachname' onChange =  {this.handleInputChange}  /></p>
                    <p>Geburtsdatum</p>
                    <p><input type='input' class="form__field" name ='alter'    onChange = {this.handleInputChange}  /> </p>
                    <p>Geschlecht</p>
                    <select>
                        <option value ="männlich">männlich</option>
                        <option value ="weiblich">weiblich</option>
                        <option value ="divers"  > divers </option>
                    </select>
                    <p>Lebt in</p>
                    
                    <p><input type='input' class="form__field" name ='wohnort'  onChange = {this.handleInputChange}  /> </p>
                    <button>Speichern</button>
                    </form>
               
                </div>
            
            

    
            
            
        )
    }

}


export default EditProfil;