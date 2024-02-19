import React, { useState } from "react";
import { week12API } from "../rest/week16Api";

const ReviewForm = ({ movieId, updateReviews }) => {
  const [reviewText, setReviewText] = useState("");

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const addReview = async (newReview) => {
    try {
      const response = await week12API.post(newReview);
      console.log("Review added successfully:", response);

      // Assuming the response contains the newly created review object
      const newReviewObject = response;

      // Update the reviews state with the new review
      updateReviews((prevReviews) => [...prevReviews, newReviewObject]);

      // Clear the review text input after submission
      setReviewText("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      let newReview = {
        movieId: movieId,
        reviewText: reviewText,
      };
      await addReview(newReview);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      {/* Review Form */}
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          placeholder="Leave a review..."
          value={reviewText}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
