import React from "react";
import { useFetch } from "../hooks";
import Story from "../modules/explore/Story";
import StoryHook from "./StoryHook";
function ThemenbereichHook(props) {


    let fetch_url_stories =`http://localhost:8080/beitragByThemenbereich?themenbereich=`;
    ////http://localhost:8080/themenbereichByTags?tags[]=10&tags[]=6
    let filterListe = props.filterListe;
    let addFilterToURL = "?";
    filterListe.forEach(function(item) {
        if(item.active){
            addFilterToURL += "tags[]="+item.id+"&";
        }
    });
    addFilterToURL = addFilterToURL.slice(0, -1);

    //"http://localhost:8080/themenbereichByTags?tags[]=9&tags[]=11";
    let fetchURLwithFilter = props.fetch_url+addFilterToURL;
    //console.log(fetchURLwithFilter);

    // fetchURLwithFilter
    let [data, loading] = useFetch(
        fetchURLwithFilter //props.fetch_url
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
                            <StoryHook fetch_url={fetch_url_stories+encodeURIComponent(id_themenbereich)+encodeURIComponent(props.filtertags)}/>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </>
    );
}
/*

* */
export default ThemenbereichHook;