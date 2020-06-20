
// import 'materialize-css'
// import {TextInput} from 'react-materialize'
import { isThisTypeNode } from 'typescript'
import React, { Component, useState } from 'react'
import HeaderBarProfilEdit from "./HeaderBarProfilEdit"
import HeaderBarMyZphere from "./HeaderBarMyZphere"



class EditProfil extends Component{

    userData;

    constructor(props){
        super(props);
        
                
            this.onChangeVorname = this.onChangeVorname.bind(this);
            this.onChangeNachname = this.onChangeVorname.bind(this);
            this.onChangeAlter = this.onChangeAlter.bind(this);
            this.onChangeWohnort = this.onChangeWohnort.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state ={
                vorname: '',
                nachname: '',
                alter: '',
                wohnort:''
            }
        }
      

        onChangeVorname(e) {
            this.setState({vorname : e.target.value})
        }
        onChangeNachname(e){
            this.setState({nachname: e.target.value})
        }
        onChangeAlter(e){
            this.setState({alter: e.target.value})
        }
        onChangeWohnort(e){
            this.setState({wohnort: e.target.value})
        }
        onSubmit(e){
            e.preventDefault()
        }
        componentDidMount(){
            this.userData = JSON.parse(localStorage.getItem('user'));

            if(localStorage.getItem('user')){
                this.setState({
                    vorname: this.userData.vorname,
                    nachname: this.userData.nachname,
                    alter: this.userData.alter,
                    wohnort: this.userData.wohnort,
                })
            }else{
                this.setState ={
                    vorname: '',
                    nachname: '',
                    alter: '',
                    wohnort:''
                }
            }
            
        }

        componentDidUpdate(nextProps, nextState){
            localStorage.setItem('user', JSON.stringify(nextState));
        }



    

    render(){
       
       
        
        return(
                <div>
        
                <div id="contentProfil">    
                
                    <p>Vorname</p>
                    <p><input type='input' class="form__field"    value={this.state.vorname}        name ='Vorname'  onChange = {this.onChangeVorname.bind(this)}/> </p>
                    <p>Nachname</p>
                    <p><input type='input' class="form__field" value={this.state.nachname}          name='Nachname' onChange = {this.onChangeNachname.bind(this)}/></p>
                    <p>Geburtsdatum</p>
                    <p><input type='input' class="form__field"   value={this.state.alter}           name ='Alter'    onChange = {this.onChangeAlter.bind(this)}/> </p>
                    <p>Geschlecht</p>
                    <select>
                        <option value ="männlich">männlich</option>
                        <option value ="weiblich">weiblich</option>
                        <option value="divers">divers</option>
                    </select>
                    <p>Lebt in</p>
                    
                    <p><input type='input' class="form__field"   value={this.state.wohnort}     name ='Wohnort'  onChange = {this.onChangeWohnort.bind(this)} /> </p>

               
            </div>
            </div>
            

    
            
            
        )
    }

}


export default EditProfil;