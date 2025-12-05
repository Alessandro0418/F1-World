import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css";
import "./App.css";
import SessionPage from "./components/SessionPage";
import Calendar from "./components/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/SessionOverview" element={<SessionPage />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
