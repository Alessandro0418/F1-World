import "../components/weatherStylePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Alert,
  Spinner,
  Badge,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WeatherPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  };
  const handleGoSession = () => {
    navigate("/SessionOverview");
  };
  const handleGoCalendar = () => {
    navigate("/Calendar");
  };
  const handleGoWeather = () => {
    navigate("/Weather");
  };

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // fetch weather
        const resWeather = await fetch(
          "https://api.openf1.org/v1/weather?session_key=latest"
        );
        const data = await resWeather.json();

        if (data.length > 0) {
          setWeatherData(data[0]);
        } else {
          setError("No weather data found for the latest session");
        }
      } catch (err) {
        console.error(err);
        setError("Could not fetch weather data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container fluid className="min-vh-100">
      <Row>
        <Col xs={12}>
          <Navbar
            expand="lg"
            className="mt-3 rounded-4 custom-nav shadow-sm"
            variant="dark"
          >
            <Container fluid>
              <Navbar.Brand
                className="text-white ms-2 fw-bold"
                onClick={handleGoHome}
                style={{ cursor: "pointer" }}
              >
                F1 World
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 gap-3" navbarScroll>
                  <Nav.Link
                    className="text-white custom-nav-effect"
                    onClick={handleGoHome}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="text-white custom-nav-effect"
                    onClick={handleGoSession}
                  >
                    Session Overview
                  </Nav.Link>
                  <Nav.Link
                    className="text-white custom-nav-effect"
                    onClick={handleGoCalendar}
                  >
                    Calendar
                  </Nav.Link>
                  <Nav.Link
                    className="text-white custom-nav-effect active fw-bold"
                    onClick={handleGoWeather}
                  >
                    Weather
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row className="mt-5 mb-4">
        <Col xs={12} className="text-center">
          <h1 className="display-4 text-white fw-bold">Weather Overview</h1>
          <p className="text-white">Weather & Track Conditions</p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5 mt-4">
        <Col xs={12} xl={10}>
          {loading && (
            <div className="text-center py-5">
              <Spinner animation="border" variant="light" />
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {!loading && !error && weatherData && (
            <Row className="justify-content-center">
              <Col xs={12} md={5} className="mb-4 mb-md-0">
                <div
                  className="p-4 bg-dark border rounded-3 text-white text-start shadow-lg"
                  style={{ minHeight: "300px", border: "1px solid #444" }}
                >
                  <h5 className="fw-bold text-center mb-4">
                    <i className="bi bi-cloud-sun me-2 text-warning"></i>
                    Weather
                  </h5>
                  <ul className="list-unstyled fw-light">
                    <li>
                      Air Temperature:{" "}
                      <span className="fw-normal float-end">
                        {weatherData.air_temperature}°C
                      </span>
                    </li>
                    <li>
                      Humidity:{" "}
                      <span className="fw-normal float-end">
                        {weatherData.humidity}%
                      </span>
                    </li>
                    <li>
                      Pressure:{" "}
                      <span className="fw-normal float-end">
                        {weatherData.pressure} mbar
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xs={12} md={5}>
                <div
                  className="p-4 bg-dark border rounded-3 text-white text-start shadow-lg"
                  style={{ minHeight: "300px", border: "1px solid #444" }}
                >
                  <h5 className="fw-bold text-center mb-4">
                    <i className="bi bi-thermometer-half me-2 text-info"></i>
                    Track Conditions & Wind
                  </h5>
                  <ul className="list-unstyled fw-light">
                    <li>
                      Track Temperature:{" "}
                      <span className="fw-normal float-end">
                        {weatherData.track_temperature}°C
                      </span>
                    </li>
                    <li>
                      Wind Speed:{" "}
                      <span className="fw-normal float-end">
                        {weatherData.wind_speed} m/s
                      </span>
                    </li>
                    <li>
                      Wind Direction:{" "}
                      <span className="fw-normal float-end">
                        {weatherData.wind_direction}°
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <span className="mt-4 p-2 rounded text-center text-white">
                Rain:{" "}
                <Badge
                  bg={weatherData.rainfall ? "danger" : "secondary"}
                  className="ms-1"
                >
                  {weatherData.rainfall ? "YES" : "NO"}
                </Badge>
              </span>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
