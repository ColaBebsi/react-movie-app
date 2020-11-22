import React, { useState, useEffect } from "react";
import { PopularMovies } from "../components/PopularMovies";
import { NowPlayingMovies } from "../components/NowPlayingMovies";
import MovieKit from "../data/MovieKit";

export const MovieListPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  const movieKit = new MovieKit();

  const fetchPopularMovies = () => {
    movieKit
      .getPopularMoviesList()
      .then((res) => res.json())
      .then(({ results }) => {
        setPopularMovies(results);
      })
      .catch((err) => console.log(err));
  }

  const fetchNowPlayingMovies = () => {
    movieKit
      .getNowPlayingMoviesList()
      .then((res) => res.json())
      .then(({ results }) => {
        setNowPlayingMovies(results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchPopularMovies();
    fetchNowPlayingMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="popular-movies">
        <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
          Popular Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularMovies &&
            popularMovies.slice(0, 10).map((movie) => {
              return <PopularMovies key={movie.id} movie={movie} />;
            })}
        </div>
      </div>

      <div className="now-playing-movies mt-20">
        <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
          Now Playing Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {nowPlayingMovies &&
            nowPlayingMovies.slice(0, 10).map((movie) => {
              return <NowPlayingMovies key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </div>
  );
};
