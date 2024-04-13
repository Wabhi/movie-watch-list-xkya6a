// Watchlist.js
import React from 'react';

const Watchlist = ({ watchlist, handleRemoveFromWatchlist }) => {
  return (
    <div>
      <h2>My Watchlist</h2>
      {watchlist.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <button onClick={() => handleRemoveFromWatchlist(movie)}>
            Remove from Watchlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
