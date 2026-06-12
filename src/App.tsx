import { useState } from "react";
import "./App.css";

type Movie = {
  id: number;
  name: string;
  grade: number;
};

function App() {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 1, name: "Amer", grade: 5},
    { id: 2, name: "American Hository X", grade: 4},
  ]);

  return (
    <>
        <section className="movie-box">

      <h1>filmlista</h1>
        <h2>Filmer</h2>

        {movies.length === 0 ? (
          <p>Finnd inga filmer</p> 
            ) : (
            <ul>
             {movies.map((movie) => (
              <movie
        ))}
        </ul>
        )}
      </section>
    </>
  );
}

export default App;
