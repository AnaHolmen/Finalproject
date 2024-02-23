import React from "react";

const ReviewList = ({ reviews, movieId }) => (
  <div key={`${movieId}-review`}>
    <h3>Reviews</h3>
    {reviews &&
      reviews.length > 0 &&
      reviews.map((review, index) => (
        <div key={index}>
          <p>{review.reviewText}</p>
          {/* Assuming each review object has a 'reviewText' property */}
        </div>
      ))}
  </div>
);

export default ReviewList;