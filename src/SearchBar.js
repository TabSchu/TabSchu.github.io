import React, {Component} from 'react';
import Suche from "./img/icon/suche_lupe.png";
import SubSportart from "./modules/explore/SubSportart";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value:'zphere'}

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    keyPress(e){
        if(e.keyCode == 13){
            this.props.parentShallSearchForChildShowThemengebiet(e.target.value);
        }
    }
render(){
    return(

    <div id="searchBar">
        <ul>
        <li><img src={Suche} onClick ={() => this.props.parentShallSearchForChildShowThemengebiet(this.state.value)}  />
        <input type ="text" placeholder={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} ></input></li>
        <li onClick={this.props.parentShallHideSearchBar}>zurück</li>
        
        </ul>
    </div>
    )
}



}







export default SearchBar;