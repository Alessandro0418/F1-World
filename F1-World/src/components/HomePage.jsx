import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "../components/HomeStyle.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleGoStandings = () => {
    navigate("/StandingOverview");
  };

  return (
    <Container fluid>
      <Row className="mt-5 mb-5">
        <Col md={12}>
          <h1 className="loading-text">F1 World</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-evenly g-4">
        <Col md={4} className="card-custom">
          <img
            src="/src/assets/img/driver-img-1.png"
            alt="driver-image"
            className="img-fluid"
          />
        </Col>
        <Col md={4} className="card-custom">
          <img
            src="/src/assets/img/driver-img-1.png"
            alt="driver-image"
            className="img-fluid"
          />
        </Col>
        <Col md={4} className="card-custom">
          <img
            src="/src/assets/img/driver-img-1.png"
            alt="driver-image"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="mt-8 gy-4">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card
            className="text-center card-custom-2 w-75 w-md-50"
            onClick={handleGoStandings}
          >
            <Card.Body>
              <i className="bi bi-trophy fs-2"></i>
              <Card.Title className="mt-3">Standing Overview</Card.Title>
              <p className="mt-2">Drivers & Constructors</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="text-center card-custom-2 w-75 w-md-50">
            <Card.Body>
              <i className="bi bi-calendar3 fs-2"></i>
              <Card.Title className="mt-3">Upcoming Races</Card.Title>
              <p className="mt-2">Calendar Preview</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="text-center card-custom-2 w-75 w-md-50">
            <Card.Body>
              <i className="bi bi-cloud-sun fs-2"></i>
              <Card.Title className="mt-3">Weather</Card.Title>
              <p className="mt-2">Weather & Track Conditions</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
