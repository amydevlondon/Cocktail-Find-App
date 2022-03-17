import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExploreCocktails from './pages/ExploreCocktails';
import CocktailSearch from './pages/CocktailSearch';
import RandomCocktail from './pages/RandomCocktail';
import SingleCocktail from './pages/SingleCocktail';
import CocktailsByLetter from './pages/CocktailsByLetter';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreCocktails />} />
          <Route path="/search" element={<CocktailSearch />} />
          <Route path="/random" element={<RandomCocktail />} />
          <Route path="atoz" element={<CocktailsByLetter />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
