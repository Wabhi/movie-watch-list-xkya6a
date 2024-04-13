// MovieDetails.js
import React, { useEffect, useState } from 'react';
import MovieService from '../../services/movieService';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await MovieService.getMovieDetails(match.params.id);
      setMovie(movieData);
    };
    fetchMovieDetails();
  }, [match.params.id]);

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <p>Released: {movie.Released}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
