import React, { Component, useState } from 'react'




class Beitrag extends Component {
    


    render() {

        var arr = [];
        arr = this.parseTeaserElement(arr);

        return(
            <div className="beitrag"  key={this.props.beitrag_id}
                 style={{backgroundImage: "url(" + this.props.img_url + ")"}}>
                <div className="beitraginhalt">
                    <div className="beitragstitel">
                        <div className="beitragskategorien">{this.props.kategorie} </div>
                        {this.props.titel}
                    </div>
                    <div className="teaser">
                        <ul>
                            { arr.map(item =><li key={item}>- {item}</li>) }
                        </ul>
                        <div className="extra">
                            <ul>
                                <li> 
                                    <p 
                                    // style={{float: "right"}}
                                    >{this.props.medientyp} </p>  

                                    <p key={this.props.sport_id} 
                                    // style={{float: "right", marginLeft:"5px"}}
                                    > {this.props.sportart}</p>
                                    
                                </li>
                                <li></li>
                                <li><button onClick={this.addBeitragZuMerkliste}>M</button> </li>                                
                            </ul>
                            
                        </div>
                    </div>
                    
                    <div className="">
                    </div>
                </div>
            </div>
          
            
        )
    }

    // ggf. gibt es keinen Teaser dann bleibt es leer, z.B. bei Audio
    parseTeaserElement(arr){
        if(this.props.teaser!=undefined){
            var json = JSON.parse(this.props.teaser);    //console.log(json);
            Object.keys(json).forEach(function(key) {
                console.log(key);
                arr.push(json[key]);
            });
        }
        return arr;
    }
}


export default Beitrag;