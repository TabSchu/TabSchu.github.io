
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


    

    render(){
       
       
        
        return(
                <div>
        
                <div id="contentProfil">    

                    <div id="xd"><p>Profilbild bearbeiten <img src={Kamera}/> <img src={Galerie} /><img src={Muelleimer} />   </p></div>
                
                    <p>Vorname</p>
                    <p><input type='input' class="form__field"   /> </p>
                    <p>Nachname</p>
                    <p><input type='input' class="form__field"   /></p>
                    <p>Geburtsdatum</p>
                    <p><input type='input' class="form__field"   /> </p>
                    <p>Geschlecht</p>
                    <select>
                        <option value ="männlich">männlich</option>
                        <option value ="weiblich">weiblich</option>
                        <option value="divers">divers</option>
                    </select>
                    <p>Lebt in</p>
                    
                    <p><input type='input' class="form__field"   /> </p>

               
            </div>
            </div>
            

    
            
            
        )
    }

}


export default EditProfil;