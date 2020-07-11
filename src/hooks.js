import { useState, useEffect } from "react";
function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        try{
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        //console.log("refetching url", url);
        fetchUrl();
        return () => {
          //  console.log("cleaned up 1");
        };
    }, [url]);

    useEffect(() => {
        return () => {
           // console.log("cleaned up 2");
        };
    }, []);


    return [data, loading];

}
export { useFetch };