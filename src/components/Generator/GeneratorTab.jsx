import React, { useState, useEffect } from 'react';
import './GeneratorTab.css';

function GeneratorTab({ addFavorite }) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const category = 'happiness';
  const apiKey = 'S5C5jS9xvIP6YHi6J7qKJw==FtgRIMEY0Bo3otg2';

  const fetchQuote = () => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        setIsFavorite(false); 
      }
    })
    .catch(error => console.error('Error fetching quote:', error));
  };

  const toggleFavorite = () => {
    if (!isFavorite) {
      addFavorite({ quote, author }); 
    }
    setIsFavorite(false); 
    setIsFavorite(prevFavorite => !prevFavorite);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='quote-container'>
      <div className='quote-wrapper'>
        <p className='quote'>{quote}</p>
        <p className='author'>Author: {author}</p>
      </div>
      <div className='button-group'>
        <button
          className={`like-button ${isFavorite ? 'liked' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? 'Liked' : 'Like'}
        </button>
        <button className='new-quote-button' onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default GeneratorTab;
