import React, { Component, useState } from 'react'
import Merkliste from './Merkliste';
import ArtikelIcon from './img/Artikel.png'
import MerklisteIcon from './img/Merkliste_leer.png'
import TeilenIcon from './img/Teilen.png'



class Beitrag extends Component {
    

    /*const [gemerkteBeiträge, setGemerkteBeiträge] = useState([])
    const [Beitrag, setBeitrag] = useState("")


    
    addBeitragZuMerkliste = () => {
    

    setGemerkteBeiträge(gemerkteBeiträge => gemerkteBeiträge.concat(Beitrag)

    }*/
   

   




    render() {
        return(

           
            <div className="beitrag">
                <div className="beitraginhalt">
                    <div className="beitragstitel">
                        <div className="beitragskategorien">Breaking News: </div>
                        Maria wechselt den Verein!
                    </div>
                    <div className="teaser">
                        <ul>
                            <li>sie wechselt nach Frankfurt</li>
                            <li>„sehr glücklich über die Entscheidung“</li>
                        
                        </ul>
                         
                    <div className="icons">
                        <ul>
                            <li><img src={ArtikelIcon} />Tanzen</li>
                            <li>vor 7 Minuten</li>
                            <li><img src={TeilenIcon} /></li>
                            <li><img src={MerklisteIcon} /></li>


                        </ul>
                    </div>


                    </div>
                   
                    
                    <div className="">
                    </div>
                </div>
            </div>
          
            
        )
    }
}

export default Beitrag;