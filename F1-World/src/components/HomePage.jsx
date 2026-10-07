import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HomeStyle.css";

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

  return (
    <Container fluid>
      <Row className="mt-4 mb-5">
        <Col md={12}>
          <h1 className="text-center text-white fw-bolder title-main">
            F1 World
          </h1>
        </Col>

        {/* season ended */}
        {/* <div className="d-flex justify-content-center align-content-center mb-1">
          <div className="season-ended"></div>
        </div>
        <p className="text-center text-white fw-bold mt-0 mb-0 rounded-3">
          2025 Season Ended
        </p>
        <div className="d-flex justify-content-center align-content-center mt-1 mb-2">
          <div className="season-ended"></div>
        </div> */}
        {/* ---------- */}

        <p className="text-secondary text-center fw-bold">
          <i class="bi bi-caret-down-fill"></i> Current top 3 drivers' world
          championship <i class="bi bi-caret-down-fill"></i>
        </p>
      </Row>
      <Row className="g-4">
        {/* CARD 1 */}
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <div className="card-custom card-1">
            <label className="avatar">2°</label>

            <label className="info">
              <span className="info-1">George Russell</span>
              <span className="info-2">236 PT</span>
            </label>

            <div className="content-1">MERCEDES</div>
            <div className="content-2">Italian</div>
          </div>
        </Col>

        {/* CARD 2 */}
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <div className="card-custom card-2">
            <label className="avatar">1°</label>

            <label className="info">
              <span className="info-1">KIMI ANTONELLI</span>
              <span className="info-2">320 PT</span>
            </label>

            <div className="content-1">MERCEDES</div>
            <div className="content-2">British</div>
          </div>
        </Col>

        {/* CARD 3 */}
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <div className="card-custom card-3">
            <label className="avatar">3°</label>

            <label className="info">
              <span className="info-1">Lewis Hamilton</span>
              <span className="info-2">214 PT</span>
            </label>

            <div className="content-1">FERRARI</div>
            <div className="content-2">British</div>
          </div>
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
      <p className="text-white fs-3 mt-4 d-flex justify-content-center align-items-center card-animation-base">
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

              <p className="smaller text-secondary">
                This is a personal and educational project created solely for
                portfolio purposes, with no commercial intent.
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
