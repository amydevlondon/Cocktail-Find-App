import React from 'react';
import './index.css';
import { FaCocktail } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';
import image from '../../images/image1.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <img className="hero-image" src={image} alt="" />
            <div className="overlay" />
            <div className="hero-text">
                <h1>cocktail<FaCocktail className="cocktail-icon" />find</h1>
                <div className="hero-links">
                    <Link to="/search">
                        search cocktails
                        <FiArrowRightCircle className="arrow-icon" />
                    </Link>
                    <Link to="/mocktails">
                        explore mocktails
                        <FiArrowRightCircle className="arrow-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;