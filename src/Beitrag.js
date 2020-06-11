import React, { Component, useState } from 'react'
import Merkliste from './Merkliste';



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
                        <button onClick={this.addBeitragZuMerkliste}>M</button>


                    </div>
                   
                    
                    <div className="">
                    </div>
                </div>
            </div>
          
            
        )
    }
}

export default Beitrag;