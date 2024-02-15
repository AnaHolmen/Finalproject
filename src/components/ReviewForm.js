import React, { useState } from "react";
import { week12API } from "../rest/week16Api";

const ReviewForm = ({ addReview, movieTitle }) => {
  console.log(week12API);

  const [reviewText, setReviewText] = useState("");

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      addReview({ movieTitle, reviewText });

      setReviewText("");
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
