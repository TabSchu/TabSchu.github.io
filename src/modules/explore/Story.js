import React, {Component} from 'react'


class Story extends Component {
    render() {
        return (
            <div className="story"  key={this.props.beitrag_id}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>

                <div className="boxcontent">
                    <p>{this.props.medientyp} </p>
                    <h4>{this.props.titel}</h4>
                </div>
            </div>
        )

    }
}


export default Story;