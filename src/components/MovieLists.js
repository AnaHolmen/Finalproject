import React from "react";
import Movie from "./Movie";
import { moviesArray } from "./Data";

// MovieList compoent redners a list of movies and Log the moviesArray to the console
function MovieLists() {
  console.log(moviesArray);

  return (
    <div>
      {moviesArray.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieLists;
