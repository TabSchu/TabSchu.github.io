import React, { Component, useState, useEffect} from 'react'
import Beitrag from './Beitrag';
import ArtikelTest from "./ArtikelTest";
import BeitragHook from "./hooks/BeitragHook";
import HeaderBarMyZphere from './HeaderBarMyZphere';
import Artikel from "./Artikel";



class Merkliste extends Component{


    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
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

        return (
            <div id="contentMerkliste">
                {button}
                <Greeting isLoggedIn={isLoggedIn} />
            </div>
        );
    }
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        let fetch_url = "http://localhost:8080/beitrag";
        return (
            <div id={"testBeitragsListe"}>
                <div> /*merklisteActive={true}*/
                    <BeitragHook   fetch_url={fetch_url}/>
                </div>
            </div>
        );
    }
    return <ArtikelTest />;
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