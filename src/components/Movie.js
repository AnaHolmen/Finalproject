import React, { useState } from "react";
import ReviewForm from "./ReviewForm"; // Updated import

const Movie = ({ movie }) => {
  // Setting up state for movie rating
  const [movieRating, setMovieRating] = useState(movie.rating);

  const { image, title, about } = movie;

  const handleSetRating = () => {
    setMovieRating(5);
  };

  return (
    <div>
      {/* Displaying the movie title and movie image*/}
      <h2>{title}</h2>
      <img src={image} className="img" alt={`${title} Movie Poster`} />
      <ReviewForm movieTitle={title} /> {/* Updated component name */}
      <p>{about}</p>
      <p>Movie Rating: {movieRating}</p>
    </div>
  );
};

export default Movie;
