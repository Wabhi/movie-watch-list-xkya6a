// MovieList.js
import React from 'react';

const MovieList = ({ movies, handleAddToWatchlist }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <button onClick={() => handleAddToWatchlist(movie)}>
            Add to Watchlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
