import React, { useState } from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CocktailList from '../../components/CocktailList';

export const ExploreCocktails = () => {

    const [category, setCategory] = useState("popular");

    const { isLoading, isError, cocktails } = useFetch(
        `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_KEY}/${category}.php`
    );

    if (isLoading)
        return <Loading />;
    if (isError)
        return <Error message={"Something went wrong"} />;
    return (
        <>
        <div className="flex-form">
                <h3 className="title">Explore</h3>
                <form className="form">
                    <select value={category} onChange={(e) => { setCategory(e.target.value); }}>
                        <option value="popular">Popular</option>
                        <option value="recent">Recently Added</option>
                        <option value="randomselection">Random</option>
                    </select>
                </form>
        </div>
            <CocktailList cocktails={cocktails} />
        </>
    );
};

export default ExploreCocktails;