import React from "react";
import { useFetch } from "../hooks";
import Beitrag from "../Beitrag";
import BeitragPodcast from "../BeitragPodcast";
function BeitragPodcastHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );


    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    <div className="bigBlock">
                        <div className="bigBox">
                            {data.map(({ id_beitrag, titel, img_url, kategorie, teaser, typ, sportart, sport }) => (
                                <div key={`beitrag_${id_beitrag}`}>
                                    <BeitragPodcast 
                                        id_beitrag={id_beitrag}  titel={titel} sport_id={sport}  sportart={sportart}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}
export default BeitragPodcastHook;