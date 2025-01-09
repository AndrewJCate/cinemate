import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchData();
    }, [url] );

    return ( {data} );
}
