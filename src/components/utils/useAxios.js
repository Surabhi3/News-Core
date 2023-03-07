import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useAxios(url, page, pageSize) {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [length, setLength] = useState(0)
    const apiKey = "{API_KEY}"

    useEffect(() => {
        axios
            .get(url, {
                params: {
                    page: page,
                    pageSize: pageSize,
                    apiKey: apiKey
                }
            })
            .then((response) => {
                setData(response.data.articles)
                if (response.data.totalResults < 100) {
                    setLength(Math.ceil(response.data.totalResults / pageSize))
                }
                else {
                    setLength(Math.ceil(100 / pageSize))
                }
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoaded(true));
    }, [page]);

    return { data, error, loaded, length };
};