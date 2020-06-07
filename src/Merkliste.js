import React, { Component } from 'react'
import Beitrag from "./Beitrag"
import HeaderBarMyZphere from "./HeaderBarMyZphere"

class Merkliste extends Component{

    constructor(props){
        super(props)
            this.state = {
                showMe: true

            }
        
    }
    funktion= () =>{
        this.setState({
            showMe: false
        })
    }

    render(){
        return(
            
                
            
            <div className="contentMerkliste">
                <div>
                    {
                        this.state.showMe ?
                        
                    <p>Hide Me</p>
                    :null
                    }
                    <button onClick={this.funktion}>Click</button>
                    </div>        
            </div>
            
        )
    }
}


export default Merkliste;