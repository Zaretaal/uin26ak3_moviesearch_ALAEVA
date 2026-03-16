import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <section>
      <h2>Filmer</h2>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </section>
  );
}