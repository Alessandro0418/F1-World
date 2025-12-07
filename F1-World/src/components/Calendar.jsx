import "../components/CalendarStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Alert,
  Spinner,
  Table,
  Badge,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Calendar() {
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
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // fetch session
        const reSession = await fetch(
          "https://api.openf1.org/v1/sessions?year=2023&session_name=Race"
        );
        const data = await reSession.json();

        const sortedData = data.sort(
          (a, b) => new Date(a.date_start) - new Date(b.date_start)
        );
        setRaces(sortedData);
      } catch (err) {
        console.error(err);
        setError("Could not fetch calendar data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(races, 4);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    return new Date(dateString).toLocaleDateString("it-IT", options);
  };

  return (
    <Container fluid className="min-vh-100">
      <Row>
        <Col xs={12}>
          <Navbar
            expand="lg"
            className="mt-3 rounded-4 custom-nav custom-toggler"
          >
            <Container fluid>
              <Navbar.Brand className="text-white ms-2 fw-bold">
                | F1 World |
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 gap-3"
                  style={{ maxHeight: "200px" }}
                  navbarScroll
                >
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
                    className="text-white custom-nav-effect fw-bold"
                    onClick={handleGoCalendar}
                  >
                    Calendar
                  </Nav.Link>
                  <Nav.Link
                    className="text-white custom-nav-effect"
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
          <h1 className="display-4 text-white fw-bold">Season Calendar</h1>
          <p className="text-white">2025 Schedule</p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col xs={12} xl={10}>
          {loading && (
            <div className="text-center py-5">
              <Spinner animation="border" variant="light" />
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {!loading && !error && (
            <div className="table-responsive rounded-3 shadow-lg">
              <Table
                bordered
                variant="dark"
                className="text-center m-0 calendar-table"
              >
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((race, colIndex) => (
                        <td
                          key={race.session_key}
                          className="p-3 position-relative align-top hover-effect"
                          style={{
                            height: "180px",
                            width: "25%",
                            border: "1px solid #444",
                          }}
                        >
                          <div className="d-flex justify-content-between mb-3">
                            <span className="badge bg-secondary opacity-50">
                              R{rowIndex * 4 + colIndex + 1}
                            </span>
                            <Badge bg="danger">{race.session_name}</Badge>
                          </div>

                          <h5 className="fw-bold mb-1">{race.country_name}</h5>
                          <small className="text-white d-block mb-3 text-truncate">
                            {race.circuit_short_name}
                          </small>

                          <div
                            className="mt-auto p-2 rounded d-inline-block w-100"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.05)",
                            }}
                          >
                            <i className="bi bi-calendar3 me-2 text-danger"></i>
                            {formatDate(race.date_start)}
                          </div>
                        </td>
                      ))}

                      {Array.from({ length: 4 - row.length }).map((_, i) => (
                        <td
                          key={`empty-${i}`}
                          className="bg-black opacity-25"
                        ></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
