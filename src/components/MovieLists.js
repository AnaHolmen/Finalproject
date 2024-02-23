import React from "react";
import Movie from "./Movie";
import { moviesArray } from "./Data";

function MovieLists({ reviews }) {
  return (
    <div>
      {moviesArray.map((movie, index) => (
        <Movie movie={movie} key={index} reviews={reviews} />
      ))}
    </div>
  );
}

export default MovieLists;
