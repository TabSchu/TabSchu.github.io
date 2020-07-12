import React, {Component} from 'react';
import Suche from "./img/icon/suche_lupe.png";


class SearchBarFav extends Component {

render(){
    return(

    <div id="searchBarFav">
        <ul>
        <li><img src={Suche}/></li>
        <li><input type ="text"></input></li>
        <li onClick={this.props.parentShallHideSearchBar}>zurück</li>
        
        </ul>
    </div>
    )
}



}







export default SearchBarFav;