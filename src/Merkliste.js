import React, { Component, useState, useEffect} from 'react'
import { isConstructorDeclaration } from 'typescript'
import Beitrag from './Beitrag';




class Merkliste extends Component{


    constructor(props){
        super(props);
        this.state = {
            show:false
        }

        this.handleshow = this.handleshow.bind(this);
    }

    handleshow(){
        this.setState({show: this.state.show});
    }





    render(){

        

        /*useEffect(() =>{

        },[]);

        //eckige klammern = wird nur ausgeführt wenn component ausgeführt? wird


        //API Abfrage - Was ist deine Merkliste? useState enthält Daten von API - useEffect runt diese Daten
        //async weil es von einer datenbank kommt
        const fetchMerkbeiträge = async () =>{
                const data = await fetch(Datenbank wo Daten herkommen)
                console.log(data);
        }*/

        //when your show state is true submit button will show up otherwise it will not shown up

        
        return(
            <div className = "contentMerkliste">
                <Beitrag />
                <Beitrag />

            </div>
        )

        
    }
}

export default Merkliste