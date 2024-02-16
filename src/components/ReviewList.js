import React from "react";

const ReviewList = (
  { reviews, id } //define review compontent
) => (
  <div key={`${id}-review`}>
    <h3>Reviews</h3>
    {reviews.map(
      (
        review,
        index // Mapping through reviews array
      ) => (
        <div key={index}>
          <p>{review}</p>
        </div>
      )
    )}
  </div>
);

export default ReviewList;
