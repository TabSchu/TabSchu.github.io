import React, { Component, useState } from 'react'
import { useFetch } from "../hooks";
import Artikel from "../Artikel";
import Podcast from "../Podcast";
import Video from "../Video";
import Profilseite from '../Profilseite';
function InhaltHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url,
    );

    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                {data.map(({ id_beitrag, titel, img_url, kategorie, teaser, typ, sportart, sport ,text, merkliste }) => {
let inhalt;
    if(typ=="Artikel"){
        inhalt=
        <Artikel 
        showHome={props.showHome} 
        id_beitrag={id_beitrag}  titel={titel}   img_url={img_url}  teaser={teaser}
        kategorie={kategorie}  medientyp={typ}   sport_id={sport}  sportart={sportart}
        text={text} isMerkliste={merkliste!=null?true:false}
        />}
    if(typ=="Podcast"){
        inhalt=
        <Podcast 
        showHome={props.showHome} 
        id_beitrag={id_beitrag}  titel={titel}   img_url={img_url}  teaser={teaser}
        kategorie={kategorie}  medientyp={typ}   sport_id={sport}  sportart={sportart}
        text={text} isMerkliste={merkliste!=null?true:false}
        />}
    if(typ=="Video"){
        inhalt=
        <Video 
        showHome={props.showHome} 
        id_beitrag={id_beitrag}  titel={titel}   img_url={img_url}  teaser={teaser}
        kategorie={kategorie}  medientyp={typ}   sport_id={sport}  sportart={sportart}
        text={text} isMerkliste={merkliste!=null?true:false}
        />}
return( 
                <div key={`beitrag_${id_beitrag}`}>
                    {inhalt}
                </div> 
            )
                            }
                                )}

                </div>
            )}
        </>
    );
}
export default InhaltHook;