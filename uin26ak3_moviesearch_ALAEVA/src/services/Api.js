const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`);
  const data = await response.json();

  if (data.Response === "False") {
    return [];
  }

  return data.Search;
}

export async function getMovie(title) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${title}&plot=full`);
  const data = await response.json();

  if (data.Response === "False") {
    return null;
  }

  return data;
}