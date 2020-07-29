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
                    {data.map(({ id_person, name, img_url, fk_user }) => { 
                        let follow=true
                        if(fk_user == null) {
                            follow=false
                            }
                            
                        let inhalt = <div>
                            <div className="SportlerWaagerecht" key={`person_${id_person}`}>
                            <div id="SportlerReihe">
                                <img src={img_url} />
                                {name}
                                <div id="checkbox"><input onClick={() => {props.changeSportler(id_person,fk_user);}}
                                type="checkbox" value={id_person}
                                        defaultChecked={follow}
                                        />
                                </div>        
                            </div>
                            </div>
                        </div>
                        return(
                            <div>{inhalt}</div>
                        )
                        
                        })}

                </div>
            )}
        </>
    );


}


export default FavoritenPersonBearbeitenHook;