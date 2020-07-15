import React from "react";
import { useFetch } from "../hooks";
import Story from "../modules/explore/Story";
import SubSportart from "../modules/explore/SubSportart";
import Person from "../modules/explore/Person";
import SportlerProfil from "../img/icon/profil.png";

function FavoritenPersonHook(props) {
    const [data, loading] = useFetch(
        props.fetch_url
    );

    console.log(data.length%3);
    console.log(Math.floor(data.length/3));
    console.dir(data[2].info1);
    let meineAnzahl = data.length;
    let anzahlVolleZeile = Math.floor(meineAnzahl/3);
    let anzahlInResteZeile = meineAnzahl%3;
  //  if(anzahlInResteZeile>0){
  //      anzahlVolleZeile +=1;
  //  }

    let table = [];
    // 7 stück
    // 0 bis 2
    // 3 bis 5
    // 6
    let k = 0;

    // Sportlerzeile: Outer loop to create parent
    for (let i = 0; i < anzahlVolleZeile; i++) { //anzahlVolleZeile
        let children = [];
        //Sportler: Inner loop to create children
        for (let j = 0; j < 3; j++) { //k+3
            children.push(<div className="Sportler"><img src={SportlerProfil} />{`Column ${j + 1} S`}</div>)
          //  k = k+3;  ${k}
        }
        //Sportlerzeile: Create the parent and add the children
        table.push(<div id='Sportlerzeile' >{children}</div>)
    }
    // Reste Zeile
    for (let i = 0; i < 1; i++) { //anzahlVolleZeile
        let children = [];
        //Sportler: Inner loop to create children
        for (let j = 0; j < anzahlInResteZeile; j++) { //k+3
            children.push(<div className="Sportler"><img src={SportlerProfil} />{`Column ${j + 1} S`}</div>)
            //  k = k+3;  ${k}
        }
        //Sportlerzeile: Create the parent and add the children
        table.push(<div id='Sportlerzeile' >{children}</div>)
    }






    // key={`person_group_${fk_person_group}`}
    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <div>{table}</div>



            )}
        </>
    ); // i = count / 3    /// 3 = 15 /3


}



/* {ausgabe}
* <div id="Sportlerzeile">


                    {data.map(({ id_person, fk_person_group, name, img_url }) => (
                        <div  className="Sportler" key={`person_${id_person}`} >
                            <img src={img_url} />
                            {name}
                        </div>
                    ))}
                </div>
* */
/*  let ausgabe = "";

   for (var i = 0; i < anzahlVolleZeile; i++) {
       ausgabe += "<div id='Sportlerzeile'></div>";
  }




  ausgabe = anzahlVolleZeile.map(() => (
       <div id="Sportlerzeile">
       </div>
   ));
   console.dir(ausgabe);


     <div>{for (var i = 0; i < anzahlVolleZeile; i++) {
                    <div id='Sportlerzeile'></div>
                }}</div>
   */

export default FavoritenPersonHook;