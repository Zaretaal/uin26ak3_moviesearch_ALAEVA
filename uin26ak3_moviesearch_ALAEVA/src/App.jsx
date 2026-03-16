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
//I denne oppgaven har jeg brukt hjkelp av chatgpt. her er lenken: https://chatgpt.com/share/69b7a7fa-511c-8008-a819-ee5ee4247523