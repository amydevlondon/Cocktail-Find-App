import React, { useState, useEffect } from 'react';
import './index.css';
import { FaSearch } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CocktailList from '../../components/CocktailList';

export const CocktailSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const fetchDrinks = async (value = letters[1 * Math.floor(Math.random() * 26)]) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_URL_SEARCH}s=${value}`);
            const data = await response.json();
            if (data.drinks) {
                setCocktails(data.drinks);
            } else {
                setCocktails([]);
            }
        }
        catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchDrinks(searchTerm);
    };

    const handleClick = () => {
        fetchDrinks();
        setSearchTerm("");
    };

    if (isLoading)
        return <Loading />;
    if (isError)
        return <Error message={"Something went wrong"} />;
    return (
        <section className="cocktail-search">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="search cocktails"
                    value={searchTerm}
                    autoFocus
                    onChange={(e) => { setSearchTerm(e.target.value); }}
                />
                <button type="submit" className="submit-btn"><FaSearch className="search-icon" /></button>
            </form>
            {!cocktails.length &&
                <div className="results-message">
                    <h4>No results found</h4>
                    <button onClick={handleClick} className="results-btn">
                        <FiArrowLeftCircle className="arrow-icon" /> Back
                            </button>
                </div>
            }
            <CocktailList cocktails={cocktails} />
        </section>
    );
};

export default CocktailSearch;