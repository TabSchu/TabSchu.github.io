import React, { Component, useState, useEffect} from 'react'
import { isConstructorDeclaration } from 'typescript'
import Beitrag from './Beitrag';
import ArtikelTest from "./ArtikelTest";




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
            <div>
                {button}
                <Greeting isLoggedIn={isLoggedIn} />
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <div id={"testBeitragsListe"}>
                <Beitrag />
                <Beitrag />
                <Beitrag />
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