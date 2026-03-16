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
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <form>
      <label htmlFor="search">Søk etter film</label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Skriv minst 3 tegn"
      />
    </form>
  );
}

//I denne oppgaven har jeg brukt hjkelp av chatgpt. her er lenken: https://chatgpt.com/share/69b7a7fa-511c-8008-a819-ee5ee4247523