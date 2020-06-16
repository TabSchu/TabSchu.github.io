import React, { Component, useState } from 'react';



class Favoriten extends Component{

    constructor(props){
        super(props);
        this.handleSearchClick1 = this.handleSearchClick1.bind(this);
        this.handleSearchClick2 = this.handleSearchClick2.bind(this);
        this.state = {
            searchClick: false
        }
    }


        handleSearchClick1(){
            this.setState({searchClick: true});
        }
        handleSearchClick2(){
            this.setState({searchClick: false});
        }
    
    render(){
        const searchClick = this.state.searchClick;
        let button;
        if(searchClick){
            button = <showSearchBar onClick={this.handleSearchClick1} />;
        }else{
            button = <hideSearchBar onCLick={this.handleSearchClick2} />;
        }

        return(
            <div id="contentFavoriten">
                <div className="obereLeiste">
                    <ul>
                    <li>
                    {button} 
                    <showSearch searchClick={searchClick}/> 
                    </li>
                    <li>+</li>
                    <li>-</li>
                    </ul>
                </div>
                <div className="untereLeiste">
                    <ul>
                    <li>Sportarten</li>
                    <li>Sportler</li>
                    <li>Verein</li>
                    </ul>
                </div>
                <div className="block">
                    <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>
                </div>


                <div className="block">
                    <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>

                </div>


                <div className="block">
                    <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>

                </div>

                <div className="block">
                    <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>

                </div>

                <div className="block">
                    <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>
                <div className="box">
                    <h3>Sportler</h3>
                </div>

                </div>
                
                </div>
                
                    
            
            
            
        )
    }
}

function showSearch(props){
    const searching = props.searching;

    if(searching){
        return(
            <div id={"searchBar"}>
                <p>Hallo</p>
            </div>
        );
    }
    return <p>Moin</p>
}

function hideSearchBar(props){
    return(
        <button className="searchButton" onClick={props.onClick}>
            S
        </button>
    );


}

function showSearchBar(props){
    return(
        <button className="searchButton" onClick={props.onClick}>
            X
        </button>
    );
}



export default Favoriten;