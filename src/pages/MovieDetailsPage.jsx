import React from 'react'

export const MovieDetailsPage = () => {
    return (
        <div className="movie-info border-b border-gray-800">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row">
                <div className="flex-none">
                    <img className="w-96" width="384px" src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UY1200_CR85,0,630,1200_AL_.jpg" alt="" />
                </div>
                <div className="md:ml-24">
                    <h2 className="text-4xl font-semibold">Rick and Morty</h2>
                    <div className="flex flex-wrap items-center text-gray-400 text-sm">
                        <span>star</span>
                        <span className="ml-1">89%</span>
                        <span className="mx-2">|</span>
                        <span>Nov 22, 2020</span>
                        <span className="mx-2">|</span>
                        <span>Adventure, Animated</span>
                    </div>

                    <p className="text-gray-300 mt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium dolores dolor, voluptate totam omnis dolorem corrupti, nam, magni veniam tenetur quam? Magnam, saepe sequi? Vitae officiis ratione, veniam quae saepe quam sint eveniet iste magnam, incidunt harum voluptas? Eaque eligendi, nihil laborum quibusdam minus voluptatibus vero repudiandae a dignissimos!
                    </p>

                    <div className="mt-12">
                        <h4 className="text-white font-semibold">Featured Cast</h4>
                        <div className="flex mt-4">
                            <div>
                                <h3>gg</h3>
                                <div className="text-sm text-gray-400">Screenplay, Director, Story</div>
                            </div>
                            <div className="ml-8">
                                <h3>WP</h3>
                                <div className="text-sm text-gray-400">Screenplay</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button className="flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150">
                            <svg className="w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                            <span className="ml-2">Play Trailer</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="movie-cast border-t border-gray-800">
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-4xl font-semibold">Cast</h2>
                    <div className="cast-info">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
