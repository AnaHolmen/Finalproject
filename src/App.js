import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Showtimes from "./pages/Showtimes";


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
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Showtimes" activeClassName="active">
                Showtimes
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Showtimes" element={<Showtimes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
