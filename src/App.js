import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { MovieListPage } from "./pages/MovieListPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Navbar />
      <MovieListPage />
      <Footer />
      <MovieDetailsPage />
    </div>
  );
}

export default App;
