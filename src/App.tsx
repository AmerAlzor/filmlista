import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

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
  const removeMovie = (id: number) => {
    setMovies(movies.filter((movie)=> movie.id !== id ))
  }

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
              <Movie key={movie.id} name={movie.name} grade={movie.grade} onRemove={() => removeMovie(movie.id)} 
              /> 
        ))}
        </ul>
        )}
      </section>
    </>
  );
}

export default App;
