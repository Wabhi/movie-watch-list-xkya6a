// movieService.js
const API_KEY = 'your_omdb_api_key';

class MovieService {
  static async searchMovies(title) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
    );
    const data = await response.json();
    return data.Search || [];
  }

  static async getMovieDetails(id) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const data = await response.json();
    return data;
  }
}

export default MovieService;
