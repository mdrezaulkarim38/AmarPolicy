import { Route, Routes } from "react-router-dom";
import "./assets/users/assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/users/Home";
import HealthInsurance from "./pages/users/HealthInsurance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/health-insurance" element={<HealthInsurance />} />
    </Routes>
  );
}

export default App;
