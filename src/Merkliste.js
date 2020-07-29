import React, { Component, useState, useEffect} from 'react'
import config from "./config";
import BeitragHook from "./hooks/BeitragHook";
import HeaderBarMyZphere from './HeaderBarMyZphere';
import InhaltHook from "./hooks/InhaltHook";



class Merkliste extends Component{


    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        
        this.showHome = this.showHome.bind(this);
        this.showInhalt = this.showInhalt.bind(this);
        this.state = {  isLoggedIn: false,
                        openHome:true,
                        openInhalt:false,
                        url_beitrag:config.basisURL+"/beitrag/",
                    };
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        let seite;
        let fetch_url = config.basisURL+"/beitragFromMerklisteByUserID?user_id=1";
        if(this.state.openHome){
            seite=<div><HeaderBarMyZphere />
            <div id="contentMerkliste" >
            <BeitragHook  fetch_url={fetch_url} showInhalt={this.showInhalt} />
            </div></div>}
        if(this.state.openInhalt){
            seite = <div><InhaltHook showHome={this.showHome} fetch_url={this.state.url_beitrag}/></div>;
        }
        return (
            <div>{seite}</div>
        );
    }

    showHome(){
        this.setState({openHome: true});
        this.setState({openInhalt: false});
    }

    showInhalt(id){
        
        console.log("show");
        this.setState({openInhalt: true,
            url_beitrag:config.basisURL+"/beitrag/"+id
        });
        console.log(this.state.url_beitrag);
        this.setState({openHome: false});
    }
}




function LoginButton(props) {
    return (
        <button className="conditionalLoadingButton"  onClick={props.onClick}>
            Merkliste anzeigen
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button className="conditionalLoadingButton" onClick={props.onClick}>
            Artikel anzeigen
        </button>
    );
}

export default Merkliste