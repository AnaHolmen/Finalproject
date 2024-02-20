import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posters from "./pages/Posters";
import Snacks from "./pages/Snacks";
import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Showtimes from "./pages/Showtimes";
import { week12API } from "./rest/week16Api";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await week12API.get();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posters" element={<Posters />} />
          <Route path="/Snacks" element={<Snacks />} />
          {/* Pass the reviews data as a prop to the Showtimes component */}
          <Route path="/Showtimes" element={<Showtimes reviews={reviews} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
