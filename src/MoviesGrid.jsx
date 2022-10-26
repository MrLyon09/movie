import React from "react";
import movies from "./movies.json";

export function MoviesGrid() {
  //    console.log(movies);// see all content in console
  return (
    <ul>
      {movies.map(
        (movie) => (
          <li key={movie.id}>{movie.title}</li>
        )
      )}
    </ul>
  );
}
