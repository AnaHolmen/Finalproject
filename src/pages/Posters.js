import React, { useEffect, useState } from "react";
import MovieLists from "../components/MovieLists";
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

  return (
    <div>
      <h1>Posters</h1>
      <p>This shows the movie posters</p>

      {/* Pass reviews data to MovieLists component */}
      <MovieLists reviews={reviews} />
    </div>
  );
}

export default Posters;
