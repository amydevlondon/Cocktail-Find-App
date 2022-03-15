import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import CocktailList from '../components/CocktailList';

export const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchDrinks = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_URL_SEARCH}${searchTerm}`);
            const data = await response.json();
            setIsLoading(false);
            if (data.drinks) {
                setCocktails(data.drinks);
            } else {
                setCocktails([]);
            }
        }
        catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchDrinks();
    };

    return (
        isLoading ? <Loading />
            : isError ? <Error />
                :
                <section className="search">
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="search cocktails"
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); }}
                        />
                        <button type="submit" className="submit-btn"><FaSearch className="search-icon" /></button>
                    </form>
                    {cocktails.length < 1 ? 
                    <div className="results-message">
                        <h4>No results found</h4> 
                        <a href="/search">
                            <FiArrowLeftCircle /> Back
                            </a>
                            </div> 
                            : null}
                    <CocktailList cocktails={cocktails} />
                </section>
    );
};

export default Search;