import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

export const Cocktail = ({ idDrink, strDrinkThumb, strDrink, strAlcoholic }) => {
    return (
        <article className="cocktail">
            <img src={strDrinkThumb} alt={strDrink} />
            <div className="flex">
                <div className="cocktail-info">
                    <h3 className="cocktail-name">{strDrink}</h3>
                    <p className="light">{strAlcoholic}</p>
                    <Link to ={`/cocktail/${idDrink}`}>Details</Link>
                </div>
            </div>
        </article>
    );
};

export default Cocktail;