import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CocktailList from '../../components/CocktailList';

const CocktailsByLetter = () => {

    const [letter, setLetter] = useState("A");
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];

    const { isLoading, isError, cocktails } = useFetch(
        `${process.env.REACT_APP_URL_SEARCH}f=${letter}`
    );

    if (isLoading)
        return <Loading />;
    if (isError)
        return <Error />;
    return (
        <>
            <div className="flex-form">
                <h3 className="title">Cocktails A to Z</h3>
                <form className="form">
                    <label htmlFor=""></label>
                    <select value={letter} onChange={(e) => { setLetter(e.target.value); }}>
                        {alphabet.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            );
                        })}
                    </select>
                </form>
            </div>
            <CocktailList cocktails={cocktails} />
        </>
    );
};

export default CocktailsByLetter;