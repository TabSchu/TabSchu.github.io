import React, { Component } from 'react'
// import 'materialize-css'
// import {TextInput} from 'react-materialize'
import { isThisTypeNode } from 'typescript'
import HeaderBarProfilEdit from "./HeaderBarProfilEdit"
import HeaderBarMyZphere from "./HeaderBarMyZphere"


class EditProfil extends Component{


    constructor(props){
        super(props)
        this.state={

            Vorname: null,
            Nachname: null,
            Alter: null,
            Geschlecht: null,
            Wohnort: null,




        }
    }

    handleEingabe = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data) //Hier Datenbankeinbindung möglich
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        })

    }
    /*componentDidMount(){
        if(window.location.pathname === './EditProfil'){
            this.setState()
        }
    }*/

    render(){
        const {Vorname} = this.state
        const {Nachname} = this.state
        const {Alter} = this.state
        const {Geschlecht} = this.state
        const {Wohnort} = this.state
        
        return(
                <div>
                   {/* <HeaderBarProfilEdit /> */}
        
                <div id="contentProfil">    
                <form onSubmit ={this.handleEingabe}>
                    <p>Vorname: {Vorname}</p>
                    <p><input type='text' placeholder='Vorname'      name ='Vorname' onChange = {this.handleChange}/> </p>
                    <p>Nachname: {Nachname}</p>
                    <p><input type='text' placeholder='Nachname'     name ='Nachname' onChange = {this.handleChange}/> </p>
                    <p>Alter: {Alter}</p>
                    <p><input type='text' placeholder='Alter'        name ='Alter'    onChange = {this.handleChange}/> </p>
                    <p>Geschlecht: {Geschlecht}</p>
                    <p><input type='text' placeholder='Geschlecht'   name ='Geschlecht'onChange = {this.handleChange} /> </p>
                    <p>Wohnort: {Wohnort}</p>
                    <p><input type='text' placeholder='Wohnort'      name ='Wohnort' onChange = {this.handleChange} /> </p>

                </form>
            </div>
            </div>
            
            
        )
    }

}


export default EditProfil;