import React, { useState } from 'react';
import './FavoriteTab.css'

function FavoriteTab({ favorites }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showFav, setShowFavorite] = useState(false);

  const filteredFavorites = favorites.filter(fav =>
    fav.quote.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    fav.author.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const toggleShowFavorite = () => {
    setShowFavorite(!showFav);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <button onClick={toggleShowFavorite}>
    {showFav ? 'Hide Favorites' : 'Favorites'}
    </button>
    {showFav && (
      <div>
      <h1>My Favorite Quotes</h1>
          <input
            type="text"
            placeholder="Search by quote or author"
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
          />
          <ul>
            {filteredFavorites.map((fav, index) => (
              <li key={index}>
                <p>{fav.quote}</p>
                <p>Author: {fav.author}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FavoriteTab;
