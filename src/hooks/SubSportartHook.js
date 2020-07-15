import React from "react";
import { useFetch } from "../hooks";
import Story from "../modules/explore/Story";
import SubSportart from "../modules/explore/SubSportart";
function SubSportartHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );
    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    <div className="middleBlock">
                    {data.map(({ id_sub_sportart, titel, img_url }) => (
                        <div key={`sub_sportart${id_sub_sportart}`}>
                            <SubSportart  parentShallShowThemengebiet ={() => props.parentShallForGrandChildsShowThemengebiet(id_sub_sportart, titel)}
                                id_sub_sportart={id_sub_sportart}  titel={titel}   img_url={img_url}
                            />
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default SubSportartHook;