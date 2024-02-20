import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList"; // Import the ReviewList component

const Movie = ({ movie }) => {
  // State to hold the reviews
  const [reviews, setReviews] = useState([]);

  // Function to update the reviews state
  const updateReviews = (newReviews) => {
    setReviews(newReviews);
  };

  const { id, image, title, about } = movie;

  return (
    <div>
      {/* Displaying the movie title and movie image*/}
      <h2>{title}</h2>
      <img src={image} className="img" alt={`${title} Movie Poster`} />

      {/* Render the ReviewForm component and pass necessary props */}
      <ReviewForm
        movieId={id}
        reviews={reviews}
        updateReviews={updateReviews}
      />

      {/* Render the ReviewList component and pass reviews as prop */}
      <ReviewList reviews={reviews} />

      <p>{about}</p>
    </div>
  );
};

export default Movie;
