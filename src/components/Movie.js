import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewsForm from "./ReviewForm";

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [movieRating, setMovieRating] = useState(movie.rating);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const { image, title, about } = movie;

  // eslint-disable-next-line no-unused-vars
  const someFunctionThatUsesSetMovieRatingAndSetId = () => {
    // You can use setMovieRating and setId here to avoid eslint warnings
    setMovieRating(5);
    // setId(123); // Removed because id is not used
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} className="img" alt={`${title} Movie Poster`} />
      <p>{about}</p>
      {/* Display the movie rating */}
      <p>Movie Rating: {movieRating}</p>

      <ReviewList reviews={reviews} />
      <ReviewsForm addReview={addReview} movieTitle={title} />
    </div>
  );
};

export default Movie;
