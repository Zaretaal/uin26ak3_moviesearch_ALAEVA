/*export default function SearchBar({ onSearch }) {
  function handleChange(event) {
    const value = event.target.value;

    if (value.length >= 3) {
      onSearch(value);
    }
  }

  return (
    <form>
      <label htmlFor="search">Search movie</label>
      <input
        id="search"
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
      />
    </form>
  );
}*/
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <li>
      <article>
        <Link to={`/${movie.Title}`}>
          {movie.Poster !== "N/A" ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <p>Ingen plakat tilgjengelig</p>
          )}
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </Link>
      </article>
    </li>
  );
}

//I denne oppgaven har jeg brukt hjkelp av chatgpt. her er lenken: https://chatgpt.com/share/69b7a7fa-511c-8008-a819-ee5ee4247523 