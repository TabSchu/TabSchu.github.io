import React, {Component} from 'react'
import ArtikelIcon from '../../img/icon/Artikel.png'
import AudioIcon from '../../img/icon/Audio.png'
import VideoIcon from '../../img/icon/Video.png'

class Story extends Component {
    render() {
        var typ = ArtikelIcon;
        if (this.props.medientyp=="Video"){
            typ = VideoIcon;
        }else if (this.props.medientyp=="Podcast"){
            typ = AudioIcon;
        }
        return (
            <div className="story"  key={this.props.beitrag_id}  onClick={this.props.showInhalt}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>

                <div className="boxcontent" style={{display:"flex"}}>
                    <p style={{marginTop:"3px"}}><img src={typ} style={{height: "20px", margin:"5px"}}/>
                        {/* {this.props.medientyp}  */}
                        </p>
                    <h4>{this.props.titel}</h4>
                </div>
            </div>
        )

    }
}


export default Story;