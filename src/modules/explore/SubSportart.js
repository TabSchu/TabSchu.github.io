import React, {Component} from 'react'


class SubSportart extends Component {
    render() {
        return (
            <div className="middleBox"  key={this.props.id_sub_sportart}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>

                <div className="boxcontent">
                    <h4>{this.props.titel}</h4>
                </div>
            </div>
        )

    }
}
/*
  id_sub_sportart={id_sub_sportart}  name={titel}   img_url={img_url}
* <div className="middleBox">
                            <div className="boxcontent"><Link to="/artikel">
                                <h4>Breakdance</h4></Link>
                            </div>
                        </div>
* */


export default SubSportart;