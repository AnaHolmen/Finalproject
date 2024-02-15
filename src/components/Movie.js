import React, { useState } from "react";
import ReviewsForm from "./ReviewForm"; // Importing the ReviewsForm component

const Movie = ({ movie }) => {
  // Setting up state for movie rating
  const [movieRating, setMovieRating] = useState(movie.rating);

  // Destructuring movie object to get specific properties
  const { image, title, about } = movie;

  const handleSetRating = () => {
    setMovieRating(5);
  };

  return (
    <div>
      {/* Displaying the movie title and movie image*/}
      <h2>{title}</h2>

      <img src={image} className="img" alt={`${title} Movie Poster`} />

      <ReviewsForm movieTitle={title} />

      <p>{about}</p>

      <p>Movie Rating: {movieRating}</p>
    </div>
  );
};

export default Movie; // Exporting the Movie component
