import React from 'react';
import { FaBars, FaHome, FaSearch, FaCocktail, FaRandom } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-custom navbar-expand-md">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Cocktail<FaCocktail className="link-icon cocktail-icon" />Find</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><FaHome className="link-icon" />Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/explore" className="nav-link"><MdExplore className="link-icon" />Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className="nav-link"><FaSearch className="link-icon" />Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/atoz" className="nav-link" href="/atoz">A-Z</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/random" className="nav-link"><FaRandom className="link-icon" />Random</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;