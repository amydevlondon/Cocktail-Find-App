import React from 'react';

export const Cocktail = ({ idDrink, strDrinkThumb, strDrink, strAlcoholic }) => {
    return (
        <article className="cocktail">
            <img src={strDrinkThumb} alt={strDrink} />
            <div className="flex">
                <div className="cocktail-info">
                    <h3 className="cocktail-name">{strDrink}</h3>
                    <p className="light">{strAlcoholic}</p>
                    <a href={`/cocktail/${idDrink}`}>Details</a>
                </div>
            </div>
        </article>
    );
};

export default Cocktail;