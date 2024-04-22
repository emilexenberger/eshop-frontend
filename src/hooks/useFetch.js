import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [triggerFetch, setTriggerFetch] = useState(0);

    const fetchData = useCallback(() => {
        const token = localStorage.getItem('token');
        setIsPending(true);
        setError(null);

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
        })
        .catch(err => {
            if (err.name !== 'AbortError') {
                setError(err.message);
                setIsPending(false);
            }
        });
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData, triggerFetch]);

    const refetch = () => {
        setTriggerFetch(triggerFetch + 1);
    };

    return { data, isPending, error, refetch };
};

export default useFetch;
