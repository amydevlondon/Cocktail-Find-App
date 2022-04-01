import React from 'react';
import './index.css';
import Cocktail from '../Cocktail';

const CocktailList = ({ cocktails }) => {
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