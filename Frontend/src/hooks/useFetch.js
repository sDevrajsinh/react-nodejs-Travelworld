import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    setError(errorData.message || `Error ${res.status}: Failed to fetch`);
                    setLoading(false);
                    return;
                }
                const result = await res.json();
                setData(result.data || result);
                setLoading(false);
            } catch (err) {
                console.error("Fetch Error:", err);
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading
    };
};

export default useFetch;
