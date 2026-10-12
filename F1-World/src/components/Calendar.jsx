import "./CalendarStyle.css";
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

  const [meetings, setMeetings] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const year = new Date().getFullYear();

        const response = await fetch(
          `https://api.openf1.org/v1/sessions?year=${year}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sessions");
        }

        const data = await response.json();

        const sortedSessions = data
          .filter((session) => !session.is_cancelled)
          .sort((a, b) => new Date(a.date_start) - new Date(b.date_start));

        const groupedMeetings = Object.values(
          sortedSessions.reduce((acc, session) => {
            const key = session.meeting_key;

            if (!acc[key]) {
              acc[key] = {
                meeting_key: key,
                country_name: session.country_name,
                location: session.location,
                circuit_short_name: session.circuit_short_name,
                country_code: session.country_code,
                sessions: [],
              };
            }

            acc[key].sessions.push(session);

            return acc;
          }, {}),
        );

        setMeetings(groupedMeetings);

        const now = new Date();

        let activeIndex = groupedMeetings.findIndex((meeting) => {
          const start = new Date(meeting.sessions[0].date_start);

          const end = new Date(
            meeting.sessions[meeting.sessions.length - 1].date_end,
          );

          return now >= start && now <= end;
        });

        if (activeIndex === -1) {
          activeIndex = groupedMeetings.findIndex((meeting) => {
            const start = new Date(meeting.sessions[0].date_start);

            return start > now;
          });
        }

        if (activeIndex === -1) {
          activeIndex = groupedMeetings.length - 1;
        }

        setCurrentIndex(activeIndex);
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? meetings.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === meetings.length - 1 ? 0 : prev + 1));
  };

  // card visibili del carosello
  const getCardClass = (index) => {
    if (index === currentIndex) {
      return "carousel-card active";
    }

    if (index === (currentIndex - 1 + meetings.length) % meetings.length) {
      return "carousel-card previous";
    }

    if (index === (currentIndex + 1) % meetings.length) {
      return "carousel-card next";
    }

    return "carousel-card hidden";
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
              {!loading && !error && meetings.length > 0 && (
                <div className="calendar-carousel">
                  <button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={goPrevious}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>

                  <div className="carousel-track">
                    {meetings.map((meeting, index) => (
                      <div
                        key={meeting.meeting_key}
                        className={getCardClass(index)}
                      >
                        {/* HEADER */}
                        <div className="race-header">
                          <div>
                            <span className="race-country">
                              {meeting.country_name}
                            </span>

                            <h2>{meeting.location}</h2>

                            <span className="race-circuit">
                              {meeting.circuit_short_name}
                            </span>
                          </div>

                          <div className="race-round">R{index + 1}</div>
                        </div>

                        {/* DATE */}
                        <div className="race-date">
                          <i className="bi bi-calendar3"></i>

                          <span>
                            {formatDate(meeting.sessions[0].date_start)}
                          </span>
                        </div>

                        {/* SESSIONS */}
                        <div className="sessions-list">
                          {meeting.sessions.map((session) => (
                            <div
                              className="session-row"
                              key={session.session_key}
                            >
                              <span className="session-name">
                                {session.session_name}
                              </span>

                              <span className="session-time">
                                {formatTime(session.date_start)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={goNext}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
