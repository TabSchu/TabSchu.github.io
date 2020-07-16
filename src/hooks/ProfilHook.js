import React, { Component, useState } from 'react'
import { useFetch } from "../hooks";
import Artikel from "../Artikel";
import Podcast from "../Podcast";
import Video from "../Video";
import Profilseite from '../Profilseite';
function ProfilHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url,
    );

    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                            {data.map(({img_url, name, info1, info2, id_person}) => {
return( 
                <div key={`beitrag_${id_person}`}>
                    <Profilseite showHome={props.showHome} id_person={id_person}
                    img_url={img_url} name={name} info1={info1} info2={info2}/>
                </div> 
            )
                            }
                                )}

                </div>
            )}
        </>
    );
}
export default ProfilHook;