import React from "react";
import { useFetch } from "../hooks";
import Beitrag from "../Beitrag";
function BeitragHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );


    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {/* <div className="bigBlock">
                        <div className="bigBox"> */}
                            {data.map(({ id_beitrag, titel, img_url, kategorie, teaser, typ, sportart, sport, merkliste }) => {//(

                                return (
                                    <div key={`beitrag_${id_beitrag}`}>
                                        <Beitrag isMerkliste={merkliste!=null?true:false}
                                            showInhalt={() => props.showInhalt(id_beitrag)}
                                            id_beitrag={id_beitrag}  titel={titel}   img_url={img_url}  teaser={teaser}
                                            kategorie={kategorie}  medientyp={typ}   sport_id={sport}  sportart={sportart}

                                            />
                                    </div>
                                )
                            }
                            //)
                                )}
                        {/* </div>
                    </div> */}

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