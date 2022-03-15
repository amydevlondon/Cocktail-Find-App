import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Cocktail from '../components/Cocktail';

export const Random = () => {
    const { isLoading, isError, cocktails } = useFetch(
        `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_KEY}/random.php`
    );
    return (
        isLoading ? <Loading />
            : isError ? <Error />
                :
                <section className="random-cocktail">
                    {cocktails.map((cocktail) => {
                        return (
                            <Cocktail key={cocktail.idDrink} {...cocktail} />
                        );
                    })}
                </section>
    );
};

export default Random;