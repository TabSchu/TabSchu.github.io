import React from "react";
import { useFetch } from "../hooks";

function FavoritenPersonHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );

    let meineAnzahl = data.length;
    let anzahlVolleZeile = Math.floor(meineAnzahl/3);
    let anzahlInResteZeile = meineAnzahl%3;
    let table = [];
    let k = 0;

    // Sportlerzeile: Outer loop to create parent
    for (let i = 0; i < anzahlVolleZeile; i++) {
        let children = [];
        //Sportler: Inner loop to create children
        for (let j = 0; j < 3; j++) {
            children.push(<div key={`sportler_${data[j+k].id_person}`} className="Sportler"><img src={data[j+k].img_url} />{data[j+k].name}</div>)
          // ${k}
        }
        k = k+3;
        //Sportlerzeile: Create the parent and add the children
        table.push(<div id='Sportlerzeile' >{children}</div>)
    }
    // Reste Zeile
    for (let i = 0; i < 1; i++) { //anzahlVolleZeile
        let children = [];
        //Sportler: Inner loop to create children
        for (let j = 0; j < anzahlInResteZeile; j++) {
            children.push(
                <div className="Sportler" key={`sportler_${data[j+k].id_person}`} ><img src={data[j+k].img_url} />{data[j+k].name}</div>
            )
        }
        //Sportlerzeile: Create the parent and add the children
        table.push(<div id='Sportlerzeile' >{children}</div>)
    }


    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>{table}</div>
            )}
        </>
    );


}


export default FavoritenPersonHook;