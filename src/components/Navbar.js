import React from 'react';
import { FaBars, FaHome, FaSearch, FaCocktail, FaRandom } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Cocktail<FaCocktail className="link-icon cocktail-icon"/>Find</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/" data-text="home"><FaHome className="link-icon"/>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/explore" data-text="explore"><MdExplore className="link-icon"/>Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search" data-text="search"><FaSearch className="link-icon"/>Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/atoz" data-text="random">A-Z</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/random" data-text="random"><FaRandom className="link-icon"/>Random</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;