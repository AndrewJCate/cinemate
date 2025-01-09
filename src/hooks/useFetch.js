import { useEffect, useState } from "react";

export const useFetch = (path) => {
    const BASE_URL = "https://api.themoviedb.org/3";
    const KEY      = "?api_key=" + process.env.REACT_APP_API_KEY;
    const NO_ADULT = "&include_adult=false";

    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const response = await fetch(BASE_URL + path + KEY + NO_ADULT);
            const json = await response.json();
            setData(json.results);
        }
        fetchData();
    }, [path] );

    return ( {data} );
}
