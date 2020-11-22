import React from "react";

export const NowPlayingMovies = ({ movie }) => {
    return (
        <div className="mt-4">
            <a href="#">
                <img
                    className="hover:opacity-75 transition ease-in-out duration-150"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                />
            </a>
            <div className="mt-2">
                <a href="#" className="text-lg mt-2 hover:text:gray:300">
                    {movie.title}
                </a>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                    <svg
                        className="fill-current text-orange-500 w-4"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="ml-1">{movie.vote_average * 10}%</span>
                    <span className="mx-2">|</span>
                    <span>{movie.release_date}</span>
                </div>
                <div className="text-gray-400 text-sm">{movie.genre_ids}</div>
            </div>
        </div>
    );
};
