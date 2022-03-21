import React from 'react';
import { FaCocktail } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import image from '../images/image1.jpg';
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <div className="hero">
            <img className="hero-image" src={image} alt="" />
            <div className="overlay" />
            <div className="hero-text">
                <h1>cocktail<FaCocktail className="cocktail-icon" />find</h1>
                    <Link to="/explore">
                        explore cocktails
                        <FiArrowRightCircle className="arrow-icon" />
                    </Link>
            </div>
        </div>
    );
};

export default Hero;