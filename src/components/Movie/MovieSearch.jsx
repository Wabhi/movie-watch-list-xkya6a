// MovieSearch.js
import React, { useState } from 'react';
import MovieService from '../../services/movieService';

const MovieSearch = ({ handleSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const movies = await MovieService.searchMovies(searchTerm);
    handleSearchResult(movies);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
