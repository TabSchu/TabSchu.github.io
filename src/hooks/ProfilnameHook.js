import React from "react";
import { useFetch } from "../hooks";


function ProfilnameHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );




    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {data.map(({ id_user, vorname, nachname, geburtsdatum, wohnort }) => (
                        
                        <div>{vorname} {nachname}</div>
                    ))}

                </div>
            )}
        </>
    );


}


export default ProfilnameHook;