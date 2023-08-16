import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import GeneratorTab from "./components/Generator/GeneratorTab";
import FavoriteTab from "./components/Favorite/FavoriteTab.jsx";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
  };

  return (
    <div>
      <Header />
      <FavoriteTab favorites={favorites} />
      <GeneratorTab addFavorite={addFavorite} />
    </div>
  );
}

export default App;
