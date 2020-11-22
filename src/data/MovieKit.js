const API_KEY = "499c2efbdcf7f7de5f55b8a544cedc02";
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
const GENRE_MOVIE_LIST_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

// eslint-disable-next-line
export default class {
  getPopularMoviesList() {
    return fetch(POPULAR_URL);
  }
  
  getNowPlayingMoviesList() {
    return fetch(NOW_PLAYING_URL);
  }

//   getPrivateHeaders() {
//     return {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${this.getToken()}`,
//     };
//   }

//   setToken(token) {
//     localStorage.setItem("TMDb_TOKEN", token);
//   }

//   getToken() {
//     return localStorage.getItem("TMDb_TOKEN");
//   }
}
