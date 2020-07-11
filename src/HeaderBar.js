import React, { Component } from 'react'
import Filter_leer from "./img/icon/Filter_leer.png";
import Zurueck from "./img/icon/Zurueck.png";
import Filter_ausgefuellt from "./img/icon/Filter_ausgefuellt.png";
// import { setSyntheticLeadingComments } from 'typescript';

class HeaderBar extends Component {

    render() {
       const  title = "zphere";
    //   setTitle(x) {
    //     title = x
    //   }
        return(
            <div id="headerBar">
                <ul>
                    <li></li>
                    {/* <li><img src={Zurueck}/></li>                     */}
                    <li>{title}</li>
                    <li>
                        <img  src={this.props.filterActive ? Filter_ausgefuellt : Filter_leer}
                             onClick={this.props.parentShallHandleFilterClick} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderBar;