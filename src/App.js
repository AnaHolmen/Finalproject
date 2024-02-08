import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Posters from "./pages/Posters";
import Showtimes from "./pages/Showtimes";
import Snacks from "./pages/Snacks";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Posters" activeClassName="active">
                Posters
              </NavLink>
            </li>
            <li>
              <NavLink to="/Showtimes" activeClassName="active">
                Showtimes
              </NavLink>
            </li>
            <li>
              <NavLink to="/Snacks" activeClassName="active">
                Snacks
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posters" element={<Posters />} />
          <Route path="/Showtimes" element={<Showtimes />} />
          <Route path="/Snacks" element={<Snacks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
