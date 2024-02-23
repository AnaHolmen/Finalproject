import React, { useEffect, useState } from "react";
import MovieLists from "../components/MovieLists";
import ReviewForm from "../components/ReviewForm"; // Import the ReviewForm component
import { week12API } from "../rest/week16Api";

function Posters() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewsData = await week12API.get();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, []);

  const addReview = async (newReview) => {
    try {
      setReviews([...reviews, newReview]);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div>
      <h1>Posters</h1>
      <p>This shows the movie posters</p>
      {/* Pass reviews data to MovieLists component */}
      <MovieLists reviews={reviews} />
      {/* Render the ReviewForm component */}
      <ReviewForm addReview={addReview} /> {/* Pass the addReview function */}
    </div>
  );
}

export default Posters;
