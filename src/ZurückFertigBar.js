import React, {Component} from 'react';
import Suche from "./img/icon/suche_lupe.png";


class ZurückFertigBar extends Component {

    constructor(props){
        super(props);

        this.twoFunctions = this.twoFunctions.bind(this)


    }


    twoFunctions(){
        this.props.parentShallHideSportlerBearbeiten();
        this.props.parentShallHideZurückFertigBar();
      
        //console.log('test zurück');
    }

render(){
    return(

    <div id="ZurückFertigBar">
        <ul>
        <li  onClick= {this.twoFunctions}>zurück</li>
        <li></li>
        <li onClick= {this.twoFunctions}>fertig</li>
        
        </ul>
    </div>
    )
}



}







export default ZurückFertigBar;