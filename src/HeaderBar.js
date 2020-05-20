import React, { Component } from 'react'
import { setSyntheticLeadingComments } from 'typescript';

class HeaderBar extends Component {

    render() {
       const  title = "zphere";
    //   setTitle(x) {
    //     title = x
    //   }
        return(
            <div id="headerBar">
                <ul>
                    <li>z</li>                    
                    <li>{title}</li>
                    <li>f
                        {/* <img src=""/> */}
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderBar;