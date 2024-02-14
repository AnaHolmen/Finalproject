import React, { useState } from "react";
import { week12API } from "../rest/week16Api";

const ReviewForm = ({ addReview, movieTitle }) => {
  // Log the API object to ensure it's being used
  console.log(week12API);

  const [reviewText, setReviewText] = useState("");

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the addReview function passed as a prop to add a new review
      addReview({ movieTitle, reviewText });
      // Clear the review text after submission
      setReviewText("");
      // Optionally, you can also update the UI to reflect the new review
      // You might want to refetch data or update state to display the latest reviews
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  // Nested Review component
  const Review = ({ text }) => <p>{text}</p>;

  return (
    <div>
      {/* Review Form */}
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          placeholder={`Leave a review for ${movieTitle}...`}
          value={reviewText}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>

      {/* Display the submitted review using the nested Review component */}
      {reviewText && <Review text={`${movieTitle}: ${reviewText}`} />}
    </div>
  );
};

export default ReviewForm;
