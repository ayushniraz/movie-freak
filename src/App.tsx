import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Nav />
      <Header setMovies={setMovies}/>
      <MovieList movies={movies} />
      <Footer />
    </>
  );
};

export default App;

// https://www.omdbapi.com/?apikey=baec14f6&s=star&page=1
