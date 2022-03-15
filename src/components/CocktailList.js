import React from 'react';
import Cocktail from './Cocktail';

export const CocktailList = ({ cocktails }) => {
    return (
        <div className="cocktail-list">
            {cocktails.map((cocktail) => {
                return (
                    <Cocktail key={cocktail.idDrink} {...cocktail} />
                );
            })}
        </div>
    );
};

export default CocktailList;