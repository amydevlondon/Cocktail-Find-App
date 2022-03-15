import React from 'react';

export const Cocktail = ({ idDrink, strDrinkThumb, strDrink, strAlcoholic }) => {
    return (
        <article className="cocktail">
            <a href={`/cocktail/${idDrink}`}>
                <img src={strDrinkThumb} alt={strDrink} />
                <div className="cocktail-info">
                    <h3 className="cocktail-name">{strDrink}</h3>
                    <p className="light">{strAlcoholic}</p>
                </div>
            </a>
        </article>
    );
};

export default Cocktail;