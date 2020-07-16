import React, {Component} from 'react'


class SubSportart extends Component {
    render() {

        return (
            <div className="middleBox" onClick={this.props.parentShallShowThemengebiet}  key={this.props.id_sub_sportart}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>

                <div className="boxcontent">
                    <h4>{this.props.titel}</h4>
                </div>
            </div>
        )

    }
}


export default SubSportart;