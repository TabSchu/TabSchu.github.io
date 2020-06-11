import React from "react";
import { useFetch } from "./hooks";
function TestHook() {
    const [data, loading] = useFetch(
        "http://localhost:8080/beitrag"
    );
    //src="/img/maria2.png"
    return (
        <>
            <h1>Photos/Beiträge</h1>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {data.map(({ id_beitrag, titel, img_url }) => (
                        <div className="testHookDiv" key={`photo-${id_beitrag}`} >
                            {titel}
                            <img alt={titel} src={img_url}  style={{width: '250px'}}/>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
export default TestHook;