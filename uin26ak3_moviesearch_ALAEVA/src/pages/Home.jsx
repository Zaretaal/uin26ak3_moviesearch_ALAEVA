import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function handleSearch(query) {
    if (query.trim().length < 3) {
      const results = await searchMovies("James Bond");
      setMovies(results.slice(0, 10));
      return;
    }

    const results = await searchMovies(query);
    setMovies(results);
  }

  useEffect(() => {
    async function loadBondMovies() {
      const results = await searchMovies("James Bond");
      setMovies(results.slice(0, 10));
    }

    loadBondMovies();
  }, []);

  return (
    <>
      <header>
        <h1>Movie Search</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
}