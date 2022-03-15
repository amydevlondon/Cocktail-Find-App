import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import CocktailList from '../components/CocktailList';

export const CocktailsLetter = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    const [letter, setLetter] = useState("P");

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_URL_SEARCH}f=${letter}`);
                const data = await response.json();
                setIsLoading(false);
                setCocktails(data.drinks);
            } catch {
                setIsLoading(false);
                setIsError(true);
            }
        };
        fetchData();
        return () => {
            setCocktails([]);
            console.log("clean up")
        };
    }, [letter]);

    const changeLetter = (e) => {
        e.preventDefault();
        setLetter(e.target.value);
    };

    return (
        isLoading ? <Loading />
            : isError ? <Error />
                :
                <>
                    <form className="form">
                        <label htmlFor=""></label>
                        <select value={letter} onChange={changeLetter}>
                            {alphabet.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })}
                        </select>
                    </form>
                    <CocktailList cocktails={cocktails} />
                </>
    );
};

export default CocktailsLetter;