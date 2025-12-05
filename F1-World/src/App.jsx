import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./index.css";
import "./App.css";
import SessionPage from "./components/SessionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="SessionOverview" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
