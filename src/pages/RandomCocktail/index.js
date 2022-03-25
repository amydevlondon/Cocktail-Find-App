import React from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Cocktail from '../../components/Cocktail';

export const RandomCocktail = () => {

    const { isLoading, isError, cocktails } = useFetch(
        `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_KEY}/random.php`
    );

    if (isLoading)
        return <Loading />;
    if (isError)
        return <Error />;
    return (
        <section className="random-cocktail">
            <Cocktail key={cocktails[0].idDrink} {...cocktails[0]} />
        </section>
    );
};

export default RandomCocktail;