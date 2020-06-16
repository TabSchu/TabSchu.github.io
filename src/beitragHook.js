import React from "react";
import { useFetch } from "./hooks";
import Beitrag from "./Beitrag";
function BeitragHook() {
    const [data, loading] = useFetch(
        "http://localhost:8080/beitrag"
    );


    return (
        <>
            {/* <h1>Photos/Beiträge</h1> */}
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {data.map(({ id_beitrag, titel, img_url, kategorie, teaser, typ, sportart, sport }) => (
                        <div key={`beitrag_${id_beitrag}`}>
                            <Beitrag
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
/*
 <div className="beitragHookDiv"  >
        {titel}
        <img alt={titel} src={img_url}  style={{width: '250px'}}/>
    </div>
* */
export default BeitragHook;