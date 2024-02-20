import React, { useState } from "react";

const Review = ({ movieTitle }) => {
  const [reviews, setReviews] = useState([]);

  // Function to fetch reviews from API or wherever they are stored
  const fetchReviews = async () => {
    // Fetch reviews from API
    const fetchedReviews = await fetchReviewsFromAPI(); // Implement this function

    // Update state with fetched reviews
    setReviews(fetchedReviews);
  };

  useEffect(() => {
    // Fetch reviews when component mounts
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>{movieTitle} Reviews</h1>
      {reviews.map((review) => (
        <div key={review.movieId}>
          <p>{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
