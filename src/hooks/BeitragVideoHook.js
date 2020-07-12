import React from "react";
import { useFetch } from "../hooks";
import Beitrag from "../Beitrag";
function BeitragVideoHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );


    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                            {data.map(({ id_beitrag, titel, img_url, kategorie, teaser, typ, sportart, sport }) => ( 

                                        <div key={`beitrag_${id_beitrag}`}>
                                            <Beitrag isMerkliste={props.isMerkliste}
                                                id_beitrag={id_beitrag}  titel={titel}   img_url={img_url}  teaser={teaser}
                                                kategorie={kategorie}  medientyp={typ}   sport_id={sport}  sportart={sportart}
                                                />
                                        </div>
 
                            ))}
                </div>
            )}
        </>
    );
}
export default BeitragVideoHook;