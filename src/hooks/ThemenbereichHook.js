import React from "react";
import { useFetch } from "../hooks";
import StoryHook from "./StoryHook";
import config from "./../config";

function ThemenbereichHook(props) {


    let fetch_url_stories =config.basisURL+`/beitragByThemenbereich?themenbereich=`;
    //http://localhost:8080/themenbereichByTags?tags[]=10&tags[]=6
    // fetchURLwithFilter
    let [data, loading] = useFetch(
         props.fetch_url
    );

    return (

        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    <div>
                    {data.map(({ id_themenbereich, titel }) => (
                        <div key={`themenbereich_${id_themenbereich}`}>
                            <h3  className="titelThemenbereich" >{titel}</h3>
                            <StoryHook 
                            showInhalt={props.showInhalt}
                            fetch_url={fetch_url_stories+encodeURIComponent(id_themenbereich)}/>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ThemenbereichHook;