import React from 'react'

export const Navbar = () => {
    return (
        <nav className="border-b border-gray-800">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6">
                <ul className="flex flex-col md:flex-row item-center">
                    <li>
                        <a href="#">📽 Logo</a>
                    </li>
                    <li className="md:ml-16 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Movies</a>
                    </li>
                    <li className="md:ml-6 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-300">TV Shows</a>
                    </li>
                    <li className="md:ml-6 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Actors</a>
                    </li>
                </ul>

                <div className="flex items-center">
                    <div className="relative mt-3 md:mt-0">
                        <input type="text" className="bg-gray-800 rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline text-sm" placeholder="Search" />
                        <div className="absolute top-0">
                            <svg className="fill-current text-gray-500 mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
