import React, { Component } from 'react'
import BeitragHook from "./hooks/BeitragHook";
import BeitragVideoHook from "./hooks/BeitragVideoHook";
import BeitragPodcastHook from "./hooks/BeitragPodcastHook";
import InhaltHook from "./hooks/InhaltHook";
import Zurueck from "./img/icon/Zurueck.png";
import config from "./config";


class Themengebiet extends Component {
constructor(props){
    super(props);
    this.state = {showArtikelBeitraege: true,
                  showPodacstBeitraege: false,
                  showVideoBeitraege: false, 
                  showHome:true,
                  showInhalt:false, 
                    };
    this.changeBeitragVideo = this.changeBeitragVideo.bind(this);
    this.changeBeitragPodcast = this.changeBeitragPodcast.bind(this);
    this.changeBeitragArtikel = this.changeBeitragArtikel.bind(this);        
    this.showHome = this.showHome.bind(this);
    this.showInhalt = this.showInhalt.bind(this);
}

    render() {

        let fetch_url_latein_artikel = this.props.fetchUrl+"&medientyp=Artikel";
        let fetch_url_latein_video = this.props.fetchUrl+"&medientyp=Video";
        let fetch_url_latein_podcast = this.props.fetchUrl+"&medientyp=Podcast";
        
        let beitrag;
        let beitragArt;

        // =<BeitragHook fetch_url={fetch_url_latein_artikel}/>;
        if(this.state.showArtikelBeitraege){
            beitrag = <BeitragHook fetch_url={fetch_url_latein_artikel} 
            showInhalt={this.showInhalt} />;
            beitragArt = <div>
                <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast}><p> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel}><p style={{borderBottom:"2px solid #00B3A6"}}> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo}><p> Video </p></li>
                    </ul>
                </div>
                </div>
        }
        if(this.state.showPodacstBeitraege){
            beitrag = <BeitragPodcastHook fetch_url={ fetch_url_latein_podcast}     
            showInhalt={this.showInhalt}  />;
            beitragArt= <div>
                <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast} ><p style={{borderBottom:"2px solid #00B3A6"}}> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel} ><p> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo}><p> Video </p></li>
                    </ul>
                </div></div>
        }
        if(this.state.showVideoBeitraege){
            beitrag = <BeitragVideoHook fetch_url={fetch_url_latein_video}
            showInhalt={this.showInhalt} />;
            beitragArt = <div>
                <div id="Beitragsart">
                    <ul>
                        <li onClick={this.changeBeitragPodcast}><p> Podcast </p></li>                    
                        <li onClick={this.changeBeitragArtikel}><p> Artikel </p></li>
                        <li onClick={this.changeBeitragVideo} ><p style={{borderBottom:"2px solid #00B3A6"}}> Video </p></li>
                    </ul>
                </div></div>
        }
        let seite;
        if(this.state.showHome){
            seite=<div>
                <div id="headerBar">
                    <ul>
                        <li><img src={Zurueck} 
                        onClick={this.props.parentShallForChildsShowThemengebiet}
                            // style={{marginLeft: "15px"}}
                            /></li>                    
                        <li>{this.props.titelThemengebiet}</li>
                        <li></li>
                    </ul>
                </div>
                {beitragArt}

                <div id="content" style={{marginTop: "80px"}}>
                    {beitrag}
                </div>
           </div>   
        }
        if(this.state.openInhalt){
            seite = <div><InhaltHook showHome={this.showHome} fetch_url={this.state.url_beitrag}/></div>;
        }

        return(
           <div>{seite}</div>         
        )
    
            }     
            
    showHome(){
        
        console.log("Home");
        this.setState({openHome: true});
        this.setState({openInhalt: false});
        this.setState({openProfil: false});
    }
    showInhalt(id_beitrag){
        console.log("inhalt")
        this.setState({openInhalt: true,
            url_beitrag:config.basisURL+"/beitrag/"+id_beitrag,
            openId:id_beitrag
        });
        this.setState({openHome: false});
    }     
changeBeitragArtikel (){
    this.setState({showArtikelBeitraege: true});
    this.setState({showPodacstBeitraege: false});
    this.setState({showVideoBeitraege: false});
}   
changeBeitragVideo () {
    this.setState({showArtikelBeitraege: false});
    this.setState({showPodacstBeitraege: false});
    this.setState({showVideoBeitraege: true});
}   
changeBeitragPodcast () {
    this.setState({showArtikelBeitraege: false});
    this.setState({showPodacstBeitraege: true});
    this.setState({showVideoBeitraege: false});
} 
} 
export default Themengebiet