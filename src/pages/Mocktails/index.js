import React from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CocktailList from '../../components/CocktailList';

export const Mocktails = () => {

    const { isLoading, isError, cocktails } = useFetch(
        `${process.env.REACT_APP_URL_NON_ALCOHOL}`
    );


    if (isLoading)
        return <Loading />;
    if (isError)
        return <Error />;
    return (
        <section className="mocktail">
            <header className="mocktail-header">
                <h3 className="title">Mocktails</h3>
                <p className="sub-title">Non Alcoholic Drinks</p>
            </header>
            <CocktailList cocktails={cocktails} />
        </section>
    );
};

export default Mocktails;