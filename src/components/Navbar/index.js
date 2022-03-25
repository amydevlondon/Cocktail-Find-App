import React from 'react';
import './index.css';
import { FaBars, FaHome, FaSearch, FaCocktail, FaRandom } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-custom navbar-expand-md">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Cocktail<FaCocktail className="link-icon cocktail-icon" />Find</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"><FaHome className="link-icon" />Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/explore" className="nav-link"><MdExplore className="link-icon" />Explore</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link"><FaSearch className="link-icon" />Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/atoz" className="nav-link" href="/atoz">A-Z</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mocktails" className="nav-link">Mocktails</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/random" className="nav-link"><FaRandom className="link-icon" />Random</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;