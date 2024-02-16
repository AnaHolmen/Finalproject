import React, { useState } from "react";
import { week12API } from "../rest/week16Api";

const ReviewForm = ({ addReview, movieTitle }) => {
  const [reviewText, setReviewText] = useState("");

  // Define handleChange function
  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  // Define handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (typeof addReview === "function") {
        // Call the API to add the review
        const response = await week12API.post({ movieTitle, reviewText });

        // Update the state with the new review
        addReview(response);

        // Clear the review text after submission
        setReviewText("");
      } else {
        console.error("addReview is not a function");
      }
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
          onChange={handleChange} // Use the handleChange function here
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
