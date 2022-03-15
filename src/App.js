import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Search from './pages/Search';
import Random from './pages/Random';
import SingleCocktail from './pages/SingleCocktail';
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
          <Route path="/random" element={<Random />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
