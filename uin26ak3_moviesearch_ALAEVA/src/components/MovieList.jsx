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

//I denne oppgaven har jeg brukt hjkelp av chatgpt. her er lenken: https://chatgpt.com/share/69b7a7fa-511c-8008-a819-ee5ee4247523