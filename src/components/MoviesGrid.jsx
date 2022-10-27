import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  //    console.log(movies);// see all content in console
  useEffect(() => [
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGRiYzFlMzJhYTFkMWQ0Y2EyNTkzOTkyYjQ0ODI4NyIsInN1YiI6IjYzMTBkODM0MGQyOTQ0MDA4MWQ4YTA1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HuS3SA1JbgIbQ1LaNg2nn29eCoiy8DVT6gUK5rNNvLM",
        "Content-type": "application/json;charset=utf-8",
      },
    }),
  ]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
