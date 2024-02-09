import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posters from "./pages/Posters";
import Snacks from "./pages/Snacks";
import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Showtimes from "./pages/Showtimes";

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posters" element={<Posters />} />
          <Route path="/Snacks" element={<Snacks />} />
          <Route path="/Showtimes" element={<Showtimes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
