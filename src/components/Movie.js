import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

const Movie = ({ movie }) => {
  // State to hold the reviews
  const [reviews, setReviews] = useState([]);

  // Function to update the reviews state
  const updateReviews = (newReviews) => {
    setReviews(newReviews);
  };

  // Destructure movie object to get specific properties
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

      {/* Pass the reviews array to the ReviewList component */}
      {/* Assuming ReviewList component is implemented and takes reviews as prop */}
      {/* <ReviewList reviews={reviews} id={id} /> */}

      <p>{about}</p>
    </div>
  );
};

export default Movie;
