import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../services/api";

export default function Movie() {
  const { movie } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const result = await getMovie(movie);
      setData(result);
    }

    fetchMovie();
  }, [movie]);

  if (!data) {
    return <p>Laster...</p>;
  }

  return (
    <article>
      <header>
        <h1>{data.Title}</h1>
        <p>{data.Year}</p>
      </header>

      <nav>
        <Link to="/">Tilbake</Link>
      </nav>

      {data.Poster !== "N/A" ? (
        <img src={data.Poster} alt={data.Title} />
      ) : (
        <p>Ingen plakat tilgjengelig</p>
      )}

      <section>
        <h2>Om filmen</h2>
        <p>{data.Plot}</p>
      </section>
    </article>
  );
}