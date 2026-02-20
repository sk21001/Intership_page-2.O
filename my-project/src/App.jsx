import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InternshipDetailPage from "./InternshipDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internship/:type" element={<InternshipDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;