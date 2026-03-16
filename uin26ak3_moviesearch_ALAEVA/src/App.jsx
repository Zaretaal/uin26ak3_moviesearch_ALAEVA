import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default function App() {
  return (
    /*<BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movie" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
} */

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movie" element={<Movie />} />
      </Routes>
    </main>
  );
}
