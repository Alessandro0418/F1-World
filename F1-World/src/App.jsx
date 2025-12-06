import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import HomePage from "./components/HomePage";
import SessionPage from "./components/SessionPage";
import Calendar from "./components/Calendar";
import WeatherPage from "./components/WeatherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/SessionOverview" element={<SessionPage />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
