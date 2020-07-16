import React from "react";
import { useFetch } from "../hooks";
import Story from "../modules/explore/Story";
import SubSportart from "../modules/explore/SubSportart";
import Person from "../modules/explore/Person";
function PersonHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );


    // key={`person_group_${fk_person_group}`}
    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    <div className="smallBlock" >
                    {data.map(({ id_person, fk_person_group, name, img_url }) => (
                        <div key={`person_${id_person}`}>
                            <Person 
                            showProfil={() => props.showProfil(id_person)}
                                id_person={id_person}  name={name}  fk_person_group={fk_person_group}  img_url={img_url}
                            />
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default PersonHook;