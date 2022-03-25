import React from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { useParams } from 'react-router-dom';

export const SingleCocktail = () => {
    const { id } = useParams();
    const { isLoading, isError, cocktails } = useFetch(
        `${process.env.REACT_APP_URL_SINGLE_COCKTAIL}${id}`
    );

    if (isLoading)
        return <Loading />;
    if (isError)
        return <Error/>;
    return (
        <section className="single-cocktail">
            {cocktails.map((cocktail) => {
                const { idDrink, strDrinkThumb, strDrink, strAlcoholic, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strInstructions } = cocktail;
                return (
                    <article key={idDrink} className="cocktail">
                        <img src={strDrinkThumb} alt="" />
                        <div className="cocktail-info">
                            <h3 className="cocktail-name">{strDrink}</h3>
                            <p className="light">{strAlcoholic}</p>
                            <p><span className="light">Serve in </span>{strGlass}</p>
                            <ul className="cocktail-ingredients">
                                <li><span className="light">Ingredients</span></li>
                                <li>{strIngredient1}</li>
                                <li>{strIngredient2}</li>
                                <li>{strIngredient3}</li>
                                <li>{strIngredient4}</li>
                                <li>{strIngredient5}</li>
                                <li>{strIngredient6}</li>
                                <li>{strIngredient7}</li>
                                <li>{strIngredient8}</li>
                                <li>{strIngredient9}</li>
                                <li>{strIngredient10}</li>
                            </ul>
                            <p className="cocktail-instructions"><span className="light">Instructions </span>{strInstructions}</p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default SingleCocktail;