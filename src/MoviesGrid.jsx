import React from "react";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

export function MoviesGrid() {
  //    console.log(movies);// see all content in console
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
