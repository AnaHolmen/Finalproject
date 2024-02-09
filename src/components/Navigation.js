import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Posters" className="nav-link">
            Posters
          </Link>
          <Link to="/Showtimes" className="nav-link">
            Showtimes
          </Link>
          <Link to="/Snacks" className="nav-link">
            Snacks
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
