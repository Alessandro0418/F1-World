import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "../components/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("");
  };

  return (
    <Container fluid>
      <Row className="mt-5 mb-5">
        <Col md={12}>
          <h1 className="loading-text">F1 World</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-evenly">
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
      <Row className="mt-8">
        <Col md={4} className="d-flex justify-content-evenly">
          <Card className="text-center w-50 card-custom-2">
            <Card.Body>
              <i class="bi bi-trophy fs-2"></i>
              <Card.Title className="mt-3">Standing Overview</Card.Title>
              <p className="mt-2">Drivers&Constructors</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-evenly">
          <Card className="text-center w-50 card-custom-2">
            <Card.Body>
              <i class="bi bi-calendar3 fs-2"></i>
              <Card.Title className="mt-3">Standing Overview</Card.Title>
              <p className="mt-2">Drivers&Constructors</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-evenly">
          <Card className="text-center w-50 card-custom-2">
            <Card.Body>
              <i class="bi bi-cloud-sun fs-2"></i>
              <Card.Title className="mt-3">Standing Overview</Card.Title>
              <p className="mt-2">Drivers&Constructors</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
