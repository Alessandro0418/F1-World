import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../components/HomeStyle.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleGoSession = () => {
    navigate("/SessionOverview");
  };
  const handleGoCalendar = () => {
    navigate("/Calendar");
  };
  const handleGoWeather = () => {
    navigate("/Weather");
  };

  const currentYear = new Date().getFullYear();

  const CARD_RED_THEME = {
    "--color-dark": "#2e171c",
    "--color-medium": "#61232a",
    "--color-light": "#3c191f",
  };
  const CARD_ORANGE_THEME = {
    "--color-dark": "#723418",
    "--color-medium": "#B85117",
    "--color-light": "#8D3C17",
  };
  const CARD_BLUE_THEME = {
    "--color-dark": "#132E44",
    "--color-medium": "#234A6E",
    "--color-light": "#173651",
  };
  const CARD_GOLD_THEME = {
    "--color-dark": "#C08227",
    "--color-medium": "#E7B139",
    "--color-light": "#D59A2D",
  };

  return (
    <Container fluid>
      <Row className="mt-5 mb-5">
        <Col md={12}>
          <h1 className="loading-text fw-bold text-center">F1 World</h1>
        </Col>
        <p className="text-secondary text-center fw-bold">
          <i class="bi bi-caret-down-fill"></i> Current top 3 drivers' world
          championship <i class="bi bi-caret-down-fill"></i>
        </p>
      </Row>
      <Row className="d-flex justify-content-evenly g-4">
        <Col
          xs={4}
          className="card-custom d-flex flex-column justify-content-start align-items-center card-animation-base"
          style={{ ...CARD_BLUE_THEME, animationDelay: "0s" }}
        >
          <img
            src="/src/assets/img/driver-img-blue.png"
            alt="driver-image"
            className="img-fluid"
          />
          <p className="text-white fw-bold fs-5">Max Verstappen</p>
          <p className="text-white fw-bold">P2</p>
        </Col>
        <Col
          xs={4}
          className="card-custom d-flex flex-column justify-content-start align-items-center podium-top"
          style={{ ...CARD_GOLD_THEME, animationDelay: "0.4s" }}
        >
          <img
            src="/src/assets/img/driver-image-wdc.png"
            alt="driver-image"
            className="img-fluid"
          />
          <p className="text-white fw-bold fs-5">Lando Norris</p>
          <p className="text-white fw-bold">World Champion</p>
        </Col>
        <Col
          xs={4}
          className="card-custom d-flex flex-column justify-content-start align-items-center card-animation-base"
          style={{ ...CARD_ORANGE_THEME, animationDelay: "0.8s" }}
        >
          <img
            src="/src/assets/img/driver-img-orange.png"
            alt="driver-image"
            className="img-fluid"
          />
          <p className="text-white fw-bold fs-5">Oscar Piastri</p>
          <p className="text-white fw-bold">P3</p>
        </Col>
      </Row>

      <Row className="mt-5 gy-4">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card
            className="text-center card-custom-2 w-75 w-md-50"
            onClick={handleGoSession}
          >
            <Card.Body>
              <i className="bi bi-flag fs-2"></i>
              <Card.Title className="mt-3">Session Overview</Card.Title>
              <p className="mt-2">Standings after a session</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card
            className="text-center card-custom-2 w-75 w-md-50"
            onClick={handleGoCalendar}
          >
            <Card.Body>
              <i className="bi bi-calendar3 fs-2"></i>
              <Card.Title className="mt-3">Upcoming Races</Card.Title>
              <p className="mt-2">Calendar Preview</p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card
            className="text-center card-custom-2 w-75 w-md-50"
            onClick={handleGoWeather}
          >
            <Card.Body>
              <i className="bi bi-cloud-sun fs-2"></i>
              <Card.Title className="mt-3">Weather</Card.Title>
              <p className="mt-2">Weather & Track Conditions</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p className="text-white fs-3 mt-6 d-flex justify-content-center align-items-center card-animation-base">
        <i class="bi bi-caret-down-fill"></i>
      </p>
      <footer className="bg-dark text-white pt-4 pb-2 mt-footer mb-5 rounded-4 border border-1 border-danger">
        <Container>
          <Row className="text-center text-md-start">
            <Col md={4} className="mb-3 mb-md-0">
              <h5 className="fw-bold text-white mb-2">F1 World</h5>
              <p className="small text-secondary mb-3">
                Data provided by OpenF1 API
              </p>

              <p className="smaller text-secondary">
                This project is unofficial and is not associated in any way with
                the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA
                ONE WORLD CHAMPIONSHIP, GRAND PRIX.
              </p>
            </Col>

            <Col md={4} className="mb-3 mb-md-0">
              <h6 className="text-white fw-bold">Links</h6>
              <Nav className="flex-column">
                <Nav.Link
                  onClick={handleGoSession}
                  className="text-secondary p-0 mb-1 small text-underline-custom"
                >
                  Session Overview
                </Nav.Link>
                <Nav.Link
                  onClick={handleGoCalendar}
                  className="text-secondary p-0 mb-1 small text-underline-custom"
                >
                  Upcomping Races
                </Nav.Link>
                <Nav.Link
                  onClick={handleGoWeather}
                  className="text-secondary p-0 mb-1 small text-underline-custom"
                >
                  Weather
                </Nav.Link>
              </Nav>
            </Col>

            <Col md={4}>
              <h6 className="text-white fw-bold">Other Links</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#github" className="text-secondary fs-6">
                  GitHub
                  <i className="bi bi-github ms-2"></i>
                </a>
                <a href="#linkedin" className="text-secondary fs-6">
                  Linkedin
                  <i className="bi bi-linkedin ms-2"></i>
                </a>
                {/* <a href="#instagram" className="text-secondary fs-6">
                  <i className="bi bi-instagram"></i>
                </a> */}
              </div>
            </Col>
            <p className="smaller text-secondary text-center">
              {" "}
              {currentYear}© - Alessandro - All rights reserved.
            </p>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}
