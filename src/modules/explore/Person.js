import React, {Component} from 'react'


class Person extends Component {
    render() {
        return (
            <div className="smallBox"  key={this.props.id_person} onClick={this.props.showProfil}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>

                <div className="boxcontent">
                    <h4>{this.props.name}</h4>
                </div>
            </div>
        )

    }
}

// falls benötigt: fk_person_group bisher noch nicht genutzt an dieser Stelle


export default Person;