import "./SessionStyle.css";
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
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SessionPage() {
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

  const [results, setResults] = useState([]);
  const [session, setSession] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        //fetch 1 session results
        const resResults = await fetch(
          "https://api.openf1.org/v1/session_result?session_key=latest",
        );
        const resultsData = await resResults.json();

        //fetch 2 drivers
        const resDrivers = await fetch(
          "https://api.openf1.org/v1/drivers?session_key=latest",
        );
        const driversData = await resDrivers.json();

        const driverMap = {};
        driversData.forEach((d) => {
          driverMap[d.driver_number] = {
            last_name: d.last_name,
            team_colour: d.team_colour,
          };
        });

        // fetch 3 Session
        const reSession = await fetch(
          "https://api.openf1.org/v1/sessions?session_key=latest",
        );
        const sessionData = await reSession.json();
        if (sessionData.length > 0) {
          setSession(sessionData[0]);
        }

        const merged = resultsData
          .map((r) => ({
            ...r,
            last_name: driverMap[r.driver_number]?.last_name || "Unknown",
            team_colour: driverMap[r.driver_number]?.team_colour || "FFFFFF",
          }))
          .sort((a, b) => {
            if (a.dnf !== b.dnf) {
              return a.dnf ? 1 : -1;
            }
            return a.position - b.position;
          });

        setResults(merged);
      } catch (err) {
        console.error(err);
        setError("Could not fetch session data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Container fluid className="min-vh-100">
      <Navbar expand="lg" className="mt-3 rounded-4 custom-nav custom-toggler">
        <Container fluid>
          <Navbar.Brand className="text-white fw-bold ms-2">
            <img
              style={{ width: "150px" }}
              src="/img/F1_world_logo_2.png"
              alt="Logo"
            />
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
                className="text-white custom-nav-effect fw-bold"
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
                className="text-white custom-nav-effect"
                onClick={handleGoWeather}
              >
                Weather
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="mt-5 mb-3">
        <Col xs={12} className="text-center">
          <h1 className="display-4 text-white fw-bold">Session Overview</h1>
          <h4 className="text-white">{session.circuit_short_name}</h4>
          <p className="text-white">
            Last session:{" "}
            <strong>
              {session.session_name} - {session.session_type}
            </strong>
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col xs={12} md={10} lg={8}>
          <div className="p-4 shadow-lg rounded-3 bg-dark text-white">
            {loading && (
              <div className="text-center py-5">
                <Spinner animation="border" variant="light" />
                <p className="mt-3">Loading session results...</p>
              </div>
            )}

            {error && <Alert variant="danger">{error}</Alert>}

            {!loading && !error && results.length > 0 && (
              <Table striped bordered hover variant="dark" className="mt-3">
                <thead>
                  <tr>
                    <th>Pos</th>
                    <th>Driver</th>
                    <th>Laps</th>
                    <th>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((driver) => (
                    <tr key={driver.driver_number}>
                      <td>{driver.position}</td>
                      <td>
                        <span
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: driver.team_colour
                              ? `#${driver.team_colour}`
                              : "#000",
                            display: "inline-block",
                            borderRadius: "3px",
                            marginRight: 10,
                          }}
                        ></span>
                        {driver.last_name}
                      </td>
                      <td>{driver.number_of_laps ?? "-"}</td>
                      <td>
                        {Array.isArray(driver.gap_to_leader)
                          ? driver.gap_to_leader[0]
                          : driver.gap_to_leader}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
