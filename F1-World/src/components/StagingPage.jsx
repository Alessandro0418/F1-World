import "../components/StandingStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export default function StandingPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  };
  const handleGoStandings = () => {
    navigate("/StandingOverview");
  };

  return (
    <Container fluid className="min-vh-100">
      <Navbar expand="lg" className="shadow-sm mt-3 custom-nav rounded-4">
        <Nav className="me-auto gap-4">
          <Navbar.Brand className="ms-3 text-white" onClick={handleGoHome}>
            F1 World
          </Navbar.Brand>
          <Nav.Link className="text-white" onClick={handleGoHome}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" onClick={handleGoStandings}>
            Standings Overview
          </Nav.Link>
          <Nav.Link className="text-white" href="#pricing">
            Upcoming Races
          </Nav.Link>
          <Nav.Link className="text-white" href="#pricing">
            Weather
          </Nav.Link>
        </Nav>
      </Navbar>

      <Row className="mt-5 mb-3">
        <Col xs={12} className="text-center">
          <h1 className="display-4">Standing Overview</h1>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col xs={12} md={10} lg={8}>
          <div
            className="p-4 shadow-lg rounded-3"
            style={{ minHeight: "500px", border: "1px solid #e9ecef" }}
          >
            <p className="text-muted text-center">classifica Dettagliata</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
