import React from "react";

export function MovieCard({ movie }) {
  const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li>
    <img src={imageUrl} alt={movie.title} />
    <div>{movie.title}</div>
  </li>
  );
}
