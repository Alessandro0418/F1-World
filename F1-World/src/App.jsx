import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import StandingPage from "./components/StagingPage";
import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="StandingOverview" element={<StandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
