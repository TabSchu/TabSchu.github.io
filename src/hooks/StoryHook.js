import React from "react";
import { useFetch } from "../hooks";
import Story from "../modules/explore/Story";
function StoryHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );
    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                    <div className="stories">

                    {data.map(({ id_beitrag, titel, img_url, typ }) => (
                        <div style={{display:"flex", height: "190px"}} key={`beitrag_${id_beitrag}`}>
                            <Story showInhalt={() => props.showInhalt(id_beitrag)}
                                id_beitrag={id_beitrag}  titel={titel}   img_url={img_url}  medientyp={typ}
                            />
                        </div>
                    ))}
                    </div>

            )}
        </>
    );
}
/*

* */
export default StoryHook;