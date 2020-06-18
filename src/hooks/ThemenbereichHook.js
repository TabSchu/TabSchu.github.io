import React from "react";
import { useFetch } from "../hooks";
import Story from "../modules/explore/Story";
import StoryHook from "./StoryHook";
function ThemenbereichHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );
   // let fetch_url_stories = "http://localhost:8080/beitrag"

    let someVariable = 6//1;
    const encodedValue = encodeURIComponent(someVariable);
    let someVariable2 = 10; //4;
    const encodedValue2 = encodeURIComponent(someVariable2);
    // http://localhost:8080/beitragByThemenbereich?themenbereich=6
    let fetch_url_stories =`http://localhost:8080/beitragByThemenbereich?themenbereich=`; //${encodedValue}
    //let fetch_url_stories =`http://localhost:8080/beitragByTags?tags[]=${encodedValue}&tags[]=${encodedValue2}`;
    //fetch(`http://localhost:8080/beitragByTags?tags[]=${encodedValue}&tags[]=${encodedValue2}?`);
    //let someVariable = 3;
    //const encodedValue = encodeURIComponent(someVariable);
    //fetch(`https://example.com/foo?bar=${encodedValue}`);




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
                            <StoryHook fetch_url={fetch_url_stories+encodeURIComponent(id_themenbereich)}/>
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