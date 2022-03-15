import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setIsLoading(false);
                setCocktails(data.drinks);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        };
        fetchData();
    }, [url]);

    return { isLoading, isError, cocktails };
};

export default useFetch;