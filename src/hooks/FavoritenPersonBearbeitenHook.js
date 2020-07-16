import React from "react";
import { useFetch } from "../hooks";

function FavoritenPersonBearbeitenHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );




    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {data.map(({ id_person, name, img_url, fk_user }) => (
                        <div className="SportlerWaagerecht" key={`person_${id_person}`}>
                            <div id="SportlerReihe">
                                <img src={img_url} />
                                {name}
                                <div id="checkbox"><input  type="checkbox" value={id_person}

                                        checked={fk_user!=null ? true : false }/>
                                </div>        
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </>
    );


}


export default FavoritenPersonBearbeitenHook;